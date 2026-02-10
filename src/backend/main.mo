import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type Lead = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  let leads = Map.empty<Text, Lead>();

  public type LeadNotFound = {
    #leadNotFound;
  };

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead capture functions
  // Public endpoint - anyone including guests can submit leads
  public shared ({ caller }) func submitLead(name : Text, email : Text, company : Text, message : Text) : async () {
    let lead : Lead = {
      name;
      email;
      company;
      message;
    };
    leads.add(email, lead);
  };

  // Admin-only: view individual lead
  public query ({ caller }) func getLead(email : Text) : async ?Lead {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leads.get(email);
  };

  // Admin-only: view all leads
  public query ({ caller }) func getAllLeads() : async [Lead] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all leads");
    };
    leads.values().toArray();
  };

  // Admin-only: delete lead
  public shared ({ caller }) func deleteLead(email : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    if (not leads.containsKey(email)) {
      Runtime.trap("Lead does not exist");
    };
    leads.remove(email);
  };
};
