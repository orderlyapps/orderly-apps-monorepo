import { Database as DatabaseGenerated } from "./exported-types-remote.js";
import { MergeDeep } from "type-fest";


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
            bbox?: [number, number, number, number];
            center?: [number, number];
          };
        };
        not_at_homes: {
          Insert: {
            location: [number, number];
          };
          Update: {
            location?: [number, number];
          };
        };
        streets: {
          Insert: {
            coordinates: [number, number];
          };
          Update: {
            coordinates?: [number, number];
          };
        };
      };
      Views: {
        _view_publishers: {
          Row: {
            publisher: Tables<"publishers">;
            congregation: Tables<"congregations"> | null;
            midweek_assignments:
              | { week_id: string; assignment: MidweekAssignment }[]
              | null;
            weekend_assignments:
              | { week_id: string; assignment: WeekendAssignment }[]
              | null;
            outlines: Tables<"outlines">[] | null;
          };
        };
        _view_public_talks: {
          Row: {
            speaker: Tables<"publishers">;
            outline: Tables<"outlines">;
          };
        };
        _view_weekend_meeting_schedule: {
          Row: {
            speakers: {
              speaker: Tables<"_view_publishers_simple">;
              outline: Tables<"outlines">;
              congregation: Tables<"congregations"> | null;
            }[];
            outline: Tables<"outlines">;
            weekend_meeting_dataL: Tables<"weekend_meeting_data">;
            chairman: Tables<"publishers">;
            reader: Tables<"publishers">;
          };
        };
      };
    };
  }
>;

export type ViewNames = keyof DatabaseGenerated["public"]["Views"];
export type TableNames = keyof DatabaseGenerated["public"]["Tables"];
export type ColumnNames<T extends ViewNames | TableNames> = keyof Tables<T>;
export type MidweekAssignment =
  DatabaseGenerated["public"]["Enums"]["midweek_assignment"];
export type WeekendAssignment =
  DatabaseGenerated["public"]["Enums"]["weekend_assignment"];

// VIEWS

export type PublisherView = {
  id: string;
  congregation: Tables<"congregations"> | null;
  publisher: Tables<"publishers">;
  outlines: Tables<"outlines">[] | null;
  midweek_assignments:
    | { week_id: string; assignment: MidweekAssignment }[]
    | null;
  midweek_participation: MidweekAssignment[];
  weekend_assignments:
    | { week_id: string; assignment: WeekendAssignment }[]
    | null;
  weekend_participation: WeekendAssignment[];
  speaker_assignments: {
    week_id: string;
    outline: Tables<"outlines">;
    congregation: Tables<"congregations">;
  }[];
  speaker_availability: number;
};

export type ScheduleView = {
  week_id: string;
  congregation_id: string;
  congregation_name: string;
  midweek_meeting_data: Tables<"midweek_meeting_data">;
  midweek_assignments: Record<MidweekAssignment, Tables<"publishers"> | null>;
  weekend_meeting_data: Tables<"weekend_meeting_data">;
  weekend_assignments: Record<WeekendAssignment, Tables<"publishers"> | null>;
  public_talk_details: {
    speaker: PublisherView;
    outline: Tables<"outlines">;
  };
  speaker_assignments: {
    speaker: PublisherView;
    outline: Tables<"outlines">;
    congregation: Tables<"congregations">;
  }[];
};

export type AvailableSpeakersView = {
  week_id: string;
  congregation_id: string;
  congregation: Tables<"congregations">;
  speakers: { speaker: Tables<"publishers">; outlines: Tables<"outlines">[] }[];
};

export type SpeakerScheduleView = {
  week_id: string;
  congregation_id: string;
  congregation: Tables<"congregations">;
  available_speakers: {
    speaker: Tables<"publishers">;
    outlines: Tables<"outlines">[];
  }[];
  public_talk_details: {
    speaker: {
      publisher: Tables<"publishers">;
      congregation: Tables<"congregations">;
      outlines: Tables<"outlines">[];
    };
    outline: Tables<"outlines">;
  }[];
  outgoing_speakers: {
    speaker: Tables<"publishers">;
    outline: Tables<"outlines">;
    congregation: Tables<"congregations">;
  }[];
};

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
