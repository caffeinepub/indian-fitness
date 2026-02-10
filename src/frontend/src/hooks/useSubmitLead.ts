import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function useSubmitLead() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (lead: LeadSubmission) => {
      if (!actor) {
        throw new Error('The system is still loading. Please wait a moment and try again.');
      }
      await actor.submitLead(lead.name, lead.email, lead.company, lead.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
    meta: {
      actorReady: !!actor && !isFetching,
    },
  });
}
