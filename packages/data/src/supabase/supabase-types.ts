import { Database as DatabaseGenerated } from "./exported-types-remote.js";
import { MergeDeep } from "type-fest";

type Week_ID =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

type UUID = `${string}-${string}-${string}-${string}-${string}`;

type Point = [number, number];

type BBox = [number, number, number, number];

type DatabaseNarrowed = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        congregations: {
          Row: {
            id: UUID;
          };
        };
        publishers: {
          Row: {
            id: UUID;
            congregation_id: UUID;
          };
        };
        outlines: {
          Row: {
            id: UUID;
          };
        };
        speaker_assignments: {
          Row: {
            week_id: Week_ID;
            congregation_id: UUID;
            outline_id: UUID | null;
            speaker_id: UUID;
          };
        };
      };
    };
  }
>;

// Type definitions for all tables in the database
export type AuthUser =
  DatabaseGenerated["public"]["Tables"]["auth_users"]["Row"];

export type Congregation =
  DatabaseGenerated["public"]["Tables"]["congregations"]["Row"];

export type MidweekAssignment =
  DatabaseGenerated["public"]["Tables"]["midweek_assignments"]["Row"];

export type MidweekMeetingData =
  DatabaseGenerated["public"]["Tables"]["midweek_meeting_data"]["Row"];

export type MidweekParticipant =
  DatabaseGenerated["public"]["Tables"]["midweek_participants"]["Row"];

export type NotAtHome =
  DatabaseGenerated["public"]["Tables"]["not_at_homes"]["Row"];

export type Outline = DatabaseGenerated["public"]["Tables"]["outlines"]["Row"];

export type Publisher =
  DatabaseGenerated["public"]["Tables"]["publishers"]["Row"];

export type SpeakerAssignment =
  DatabaseGenerated["public"]["Tables"]["speaker_assignments"]["Row"];

export type SpeakerAvailability =
  DatabaseGenerated["public"]["Tables"]["speaker_availability"]["Row"];

export type SpeakerOutline =
  DatabaseGenerated["public"]["Tables"]["speaker_outlines"]["Row"];

export type Street = DatabaseGenerated["public"]["Tables"]["streets"]["Row"];

export type Suburb = DatabaseGenerated["public"]["Tables"]["suburbs"]["Row"];

export type Suburb2 = DatabaseGenerated["public"]["Tables"]["suburbs_2"]["Row"];

export type WeekendAssignment =
  DatabaseGenerated["public"]["Tables"]["weekend_assignments"]["Row"];

export type WeekendMeetingData =
  DatabaseGenerated["public"]["Tables"]["weekend_meeting_data"]["Row"];

export type WeekendParticipant =
  DatabaseGenerated["public"]["Tables"]["weekend_participants"]["Row"];

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        suburbs_2: {
          Row: {
            bbox: [number, number, number, number];
            center: [number, number];
          };
          Insert: {
            bbox: [number, number, number, number];
            center: [number, number];
          };
          Update: {
            bbox: [number, number, number, number];
            center: [number, number];
          };
        };
        not_at_homes: {
          Row: {
            location: [number, number];
          };
          Insert: {
            location: [number, number];
          };
          Update: {
            location: [number, number];
          };
        };
      };
      Views: {
        _view_available_speakers: {};
        _view_midweek_assignments: {
          Row: {
            assignments: Record<
              DatabaseGenerated["public"]["Enums"]["midweek_assignment"],
              Publisher
            >;
          };
        };
        _view_midweek_meeting_schedule: {
          Row: {
            midweek_meeting_data: Tables<"midweek_meeting_data">;
            midweek_assignments: Record<
              DatabaseGenerated["public"]["Enums"]["midweek_assignment"],
              Tables<"publishers">
            >;
          };
        };
        _view_outgoing_speakers: {
          Row: {
            outgoing_speakers: SpeakerAssignment[];
          };
        };
        _view_public_talk_details: {
          Row: {
            speaker: Publisher;
            congregation: Congregation;
            outline: Outline;
          };
        };
        _view_public_talks: {
          Row: {
            outline: Outline;
            speaker: Publisher;
            chairman: Publisher;
            reader: Publisher;
          };
        };
        _view_publishers_simple: {};
        _view_speakers: {
          Row: {
            assignments: {
              outline: Outline;
              congregation: Congregation;
              week_id: string;
            }[];
            congregation: Congregation;
            outlines: Outline[];
          };
        };
        _view_weekend_assignments: {
          Row: {
            reader: Publisher | null;
            chairman: Publisher | null;
          };
        };
        _view_weekend_meeting_schedule2: {};
        _view_weekend_participants: {
          Row: {
            assignments: {
              assignment: "chairman" | "reader";
              week_id: string;
            }[];
            participation: ("chairman" | "reader")[];
          };
        };
      };
    };
  }
>;

type test = Tables<"_view_outgoing_speakers_2">["outgoing_speakers"];

// TYPE FACTORIES

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
