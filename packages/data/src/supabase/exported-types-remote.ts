export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      auth_users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      congregations: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      midweek_assignments: {
        Row: {
          assignment: Database["public"]["Enums"]["midweek_assignment"]
          congregation_id: string
          participant_id: string
          week_id: string
        }
        Insert: {
          assignment: Database["public"]["Enums"]["midweek_assignment"]
          congregation_id: string
          participant_id: string
          week_id: string
        }
        Update: {
          assignment?: Database["public"]["Enums"]["midweek_assignment"]
          congregation_id?: string
          participant_id?: string
          week_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "midweek_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "midweek_assignments_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "midweek_assignments_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "midweek_assignments_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
      midweek_meeting_data: {
        Row: {
          mwb_ayf_count: string | null
          mwb_ayf_part1: string | null
          mwb_ayf_part1_time: string | null
          mwb_ayf_part1_title: string | null
          mwb_ayf_part1_type: string | null
          mwb_ayf_part2: string | null
          mwb_ayf_part2_time: string | null
          mwb_ayf_part2_title: string | null
          mwb_ayf_part2_type: string | null
          mwb_ayf_part3: string | null
          mwb_ayf_part3_time: string | null
          mwb_ayf_part3_title: string | null
          mwb_ayf_part3_type: string | null
          mwb_ayf_part4: string | null
          mwb_ayf_part4_time: string | null
          mwb_ayf_part4_title: string | null
          mwb_ayf_part4_type: string | null
          mwb_lc_cbs: string | null
          mwb_lc_cbs_title: string | null
          mwb_lc_count: string | null
          mwb_lc_part1: string | null
          mwb_lc_part1_content: string | null
          mwb_lc_part1_time: string | null
          mwb_lc_part1_title: string | null
          mwb_lc_part2: string | null
          mwb_lc_part2_content: string | null
          mwb_lc_part2_time: string | null
          mwb_lc_part2_title: string | null
          mwb_song_conclude: string | null
          mwb_song_first: string | null
          mwb_song_middle: string | null
          mwb_tgw_bread: string | null
          mwb_tgw_bread_title: string | null
          mwb_tgw_gems_title: string | null
          mwb_tgw_talk: string | null
          mwb_tgw_talk_title: string | null
          mwb_week_date: string
          mwb_week_date_locale: string | null
          mwb_weekly_bible_reading: string | null
        }
        Insert: {
          mwb_ayf_count?: string | null
          mwb_ayf_part1?: string | null
          mwb_ayf_part1_time?: string | null
          mwb_ayf_part1_title?: string | null
          mwb_ayf_part1_type?: string | null
          mwb_ayf_part2?: string | null
          mwb_ayf_part2_time?: string | null
          mwb_ayf_part2_title?: string | null
          mwb_ayf_part2_type?: string | null
          mwb_ayf_part3?: string | null
          mwb_ayf_part3_time?: string | null
          mwb_ayf_part3_title?: string | null
          mwb_ayf_part3_type?: string | null
          mwb_ayf_part4?: string | null
          mwb_ayf_part4_time?: string | null
          mwb_ayf_part4_title?: string | null
          mwb_ayf_part4_type?: string | null
          mwb_lc_cbs?: string | null
          mwb_lc_cbs_title?: string | null
          mwb_lc_count?: string | null
          mwb_lc_part1?: string | null
          mwb_lc_part1_content?: string | null
          mwb_lc_part1_time?: string | null
          mwb_lc_part1_title?: string | null
          mwb_lc_part2?: string | null
          mwb_lc_part2_content?: string | null
          mwb_lc_part2_time?: string | null
          mwb_lc_part2_title?: string | null
          mwb_song_conclude?: string | null
          mwb_song_first?: string | null
          mwb_song_middle?: string | null
          mwb_tgw_bread?: string | null
          mwb_tgw_bread_title?: string | null
          mwb_tgw_gems_title?: string | null
          mwb_tgw_talk?: string | null
          mwb_tgw_talk_title?: string | null
          mwb_week_date: string
          mwb_week_date_locale?: string | null
          mwb_weekly_bible_reading?: string | null
        }
        Update: {
          mwb_ayf_count?: string | null
          mwb_ayf_part1?: string | null
          mwb_ayf_part1_time?: string | null
          mwb_ayf_part1_title?: string | null
          mwb_ayf_part1_type?: string | null
          mwb_ayf_part2?: string | null
          mwb_ayf_part2_time?: string | null
          mwb_ayf_part2_title?: string | null
          mwb_ayf_part2_type?: string | null
          mwb_ayf_part3?: string | null
          mwb_ayf_part3_time?: string | null
          mwb_ayf_part3_title?: string | null
          mwb_ayf_part3_type?: string | null
          mwb_ayf_part4?: string | null
          mwb_ayf_part4_time?: string | null
          mwb_ayf_part4_title?: string | null
          mwb_ayf_part4_type?: string | null
          mwb_lc_cbs?: string | null
          mwb_lc_cbs_title?: string | null
          mwb_lc_count?: string | null
          mwb_lc_part1?: string | null
          mwb_lc_part1_content?: string | null
          mwb_lc_part1_time?: string | null
          mwb_lc_part1_title?: string | null
          mwb_lc_part2?: string | null
          mwb_lc_part2_content?: string | null
          mwb_lc_part2_time?: string | null
          mwb_lc_part2_title?: string | null
          mwb_song_conclude?: string | null
          mwb_song_first?: string | null
          mwb_song_middle?: string | null
          mwb_tgw_bread?: string | null
          mwb_tgw_bread_title?: string | null
          mwb_tgw_gems_title?: string | null
          mwb_tgw_talk?: string | null
          mwb_tgw_talk_title?: string | null
          mwb_week_date?: string
          mwb_week_date_locale?: string | null
          mwb_weekly_bible_reading?: string | null
        }
        Relationships: []
      }
      midweek_participants: {
        Row: {
          assignment: Database["public"]["Enums"]["midweek_assignment"]
          participant_id: string
        }
        Insert: {
          assignment: Database["public"]["Enums"]["midweek_assignment"]
          participant_id: string
        }
        Update: {
          assignment?: Database["public"]["Enums"]["midweek_assignment"]
          participant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "midweek_participants_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "midweek_participants_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "midweek_participants_participant_id_fkey1"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
      not_at_homes: {
        Row: {
          accuracy: string
          confidence: string
          congregation_id: string
          created_at: string
          created_by: string
          house_number: string
          id: string
          location: unknown
          match_data: Json
          returned: boolean
          street: string
          suburb: string
          unit_number: string | null
          written: boolean
        }
        Insert: {
          accuracy: string
          confidence: string
          congregation_id: string
          created_at?: string
          created_by?: string
          house_number: string
          id?: string
          location: unknown
          match_data: Json
          returned?: boolean
          street: string
          suburb: string
          unit_number?: string | null
          written?: boolean
        }
        Update: {
          accuracy?: string
          confidence?: string
          congregation_id?: string
          created_at?: string
          created_by?: string
          house_number?: string
          id?: string
          location?: unknown
          match_data?: Json
          returned?: boolean
          street?: string
          suburb?: string
          unit_number?: string | null
          written?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "not_at_homes_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
        ]
      }
      outlines: {
        Row: {
          id: string
          theme: string
        }
        Insert: {
          id: string
          theme: string
        }
        Update: {
          id?: string
          theme?: string
        }
        Relationships: []
      }
      publishers: {
        Row: {
          congregation_id: string | null
          first_name: string
          id: string
          last_name: string
        }
        Insert: {
          congregation_id?: string | null
          first_name: string
          id?: string
          last_name: string
        }
        Update: {
          congregation_id?: string | null
          first_name?: string
          id?: string
          last_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
        ]
      }
      speaker_assignments: {
        Row: {
          congregation_id: string
          outline_id: string | null
          speaker_id: string
          week_id: string
        }
        Insert: {
          congregation_id: string
          outline_id?: string | null
          speaker_id: string
          week_id: string
        }
        Update: {
          congregation_id?: string
          outline_id?: string | null
          speaker_id?: string
          week_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outgoing_speakers_outline_id_speaker_id_fkey"
            columns: ["outline_id", "speaker_id"]
            isOneToOne: false
            referencedRelation: "speaker_outlines"
            referencedColumns: ["outline_id", "speaker_id"]
          },
        ]
      }
      speaker_availability: {
        Row: {
          availability: number
          speaker_id: string
        }
        Insert: {
          availability?: number
          speaker_id: string
        }
        Update: {
          availability?: number
          speaker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "speaker_availability_speaker_id_fkey"
            columns: ["speaker_id"]
            isOneToOne: true
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "speaker_availability_speaker_id_fkey"
            columns: ["speaker_id"]
            isOneToOne: true
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "speaker_availability_speaker_id_fkey"
            columns: ["speaker_id"]
            isOneToOne: true
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
      speaker_outlines: {
        Row: {
          outline_id: string
          speaker_id: string
        }
        Insert: {
          outline_id?: string
          speaker_id: string
        }
        Update: {
          outline_id?: string
          speaker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "speaker_outlines_outline_id_fkey"
            columns: ["outline_id"]
            isOneToOne: false
            referencedRelation: "outlines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "speaker_outlines_speaker_d_fkey"
            columns: ["speaker_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "speaker_outlines_speaker_d_fkey"
            columns: ["speaker_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "speaker_outlines_speaker_d_fkey"
            columns: ["speaker_id"]
            isOneToOne: false
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
      streets: {
        Row: {
          congregation_id: string
          coordinates: unknown
          id: number
          street_name: string
          suburb_id: number
        }
        Insert: {
          congregation_id: string
          coordinates: unknown
          id?: never
          street_name: string
          suburb_id: number
        }
        Update: {
          congregation_id?: string
          coordinates?: unknown
          id?: never
          street_name?: string
          suburb_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "streets_suburb_id_fkey"
            columns: ["suburb_id"]
            isOneToOne: false
            referencedRelation: "suburbs_2"
            referencedColumns: ["id"]
          },
        ]
      }
      suburbs: {
        Row: {
          congregation_id: string
          id: number
          suburb: string
        }
        Insert: {
          congregation_id: string
          id?: never
          suburb: string
        }
        Update: {
          congregation_id?: string
          id?: never
          suburb?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "fk_congregation"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
        ]
      }
      suburbs_2: {
        Row: {
          bbox: Json
          center: Json
          congregation_id: string
          id: number
          name: string
        }
        Insert: {
          bbox: Json
          center: Json
          congregation_id: string
          id?: number
          name: string
        }
        Update: {
          bbox?: Json
          center?: Json
          congregation_id?: string
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "suburbs_2_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
        ]
      }
      weekend_assignments: {
        Row: {
          assignment: Database["public"]["Enums"]["weekend_assignment"]
          congregation_id: string
          participant_id: string
          week_id: string
        }
        Insert: {
          assignment: Database["public"]["Enums"]["weekend_assignment"]
          congregation_id: string
          participant_id: string
          week_id: string
        }
        Update: {
          assignment?: Database["public"]["Enums"]["weekend_assignment"]
          congregation_id?: string
          participant_id?: string
          week_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "weekend_assignments_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekend_assignments_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekend_assignments_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekend_assignments_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
      weekend_meeting_data: {
        Row: {
          w_study_concluding_song: string | null
          w_study_date: string
          w_study_date_locale: string | null
          w_study_opening_song: string | null
          w_study_title: string | null
        }
        Insert: {
          w_study_concluding_song?: string | null
          w_study_date: string
          w_study_date_locale?: string | null
          w_study_opening_song?: string | null
          w_study_title?: string | null
        }
        Update: {
          w_study_concluding_song?: string | null
          w_study_date?: string
          w_study_date_locale?: string | null
          w_study_opening_song?: string | null
          w_study_title?: string | null
        }
        Relationships: []
      }
      weekend_participants: {
        Row: {
          assignment: Database["public"]["Enums"]["weekend_assignment"]
          participant_id: string
        }
        Insert: {
          assignment: Database["public"]["Enums"]["weekend_assignment"]
          participant_id: string
        }
        Update: {
          assignment?: Database["public"]["Enums"]["weekend_assignment"]
          participant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekend_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekend_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "_view_publishers_simple"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekend_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "publishers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      _view_available_speakers: {
        Row: {
          congregation: Json | null
          congregation_id: string | null
          speakers: Json[] | null
          week_id: string | null
        }
        Relationships: []
      }
      _view_midweek_meeting_schedule: {
        Row: {
          congregation_id: string | null
          congregation_name: string | null
          midweek_assignments: Json | null
          midweek_meeting_data: Json | null
          week_id: string | null
          weekend_assignments: Json | null
        }
        Relationships: []
      }
      _view_public_talks: {
        Row: {
          congregation_id: string | null
          home_congregation: string | null
          outline: Json | null
          outline_id: string | null
          speaker: Json | null
          speaker_id: string | null
          week_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "outgoing_speakers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outgoing_speakers_outline_id_speaker_id_fkey"
            columns: ["outline_id", "speaker_id"]
            isOneToOne: false
            referencedRelation: "speaker_outlines"
            referencedColumns: ["outline_id", "speaker_id"]
          },
        ]
      }
      _view_publishers: {
        Row: {
          congregation: Json | null
          id: string | null
          midweek_assignments: Json[] | null
          midweek_participation:
            | Database["public"]["Enums"]["midweek_assignment"][]
            | null
          outlines: Json[] | null
          publisher: Json | null
          speaker_assignments: Json[] | null
          speaker_availability: number | null
          weekend_assignments: Json[] | null
          weekend_participation:
            | Database["public"]["Enums"]["weekend_assignment"][]
            | null
        }
        Relationships: []
      }
      _view_publishers_simple: {
        Row: {
          congregation_id: string | null
          congregation_name: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_available_speakers"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_midweek_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "_view_weekend_meeting_schedule2"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregation_week_view"
            referencedColumns: ["congregation_id"]
          },
          {
            foreignKeyName: "publishers_congregation_id_fkey"
            columns: ["congregation_id"]
            isOneToOne: false
            referencedRelation: "congregations"
            referencedColumns: ["id"]
          },
        ]
      }
      _view_schedule: {
        Row: {
          congregation_id: string | null
          congregation_name: string | null
          midweek_assignments: Json | null
          midweek_meeting_data: Json | null
          public_talk_details: Json | null
          speaker_assignments: Json[] | null
          week_id: string | null
          weekend_assignments: Json | null
          weekend_meeting_data: Json | null
        }
        Relationships: []
      }
      _view_weekend_meeting_schedule: {
        Row: {
          chairman: Json | null
          congregation: Json | null
          congregation_id: string | null
          reader: Json | null
          speakers: Json[] | null
          week_id: string | null
          weekend_meeting_data: Json | null
        }
        Relationships: []
      }
      _view_weekend_meeting_schedule2: {
        Row: {
          chairman: Json | null
          congregation: Json | null
          congregation_id: string | null
          reader: Json | null
          speakers: Json[] | null
          week_id: string | null
          weekend_meeting_data: Json | null
        }
        Relationships: []
      }
      congregation_week_view: {
        Row: {
          congregation_id: string | null
          congregation_name: string | null
          outgoing_speakers:
            | Database["public"]["Tables"]["speaker_assignments"]["Row"][]
            | null
          outline: Json | null
          speaker: Json | null
          week_id: string | null
          weekend_meeting_data: Json | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_not_at_homes_with_coordinates: {
        Args: {
          p_congregation_id: string
        }
        Returns: {
          id: string
          created_at: string
          congregation_id: string
          unit_number: string
          house_number: string
          street: string
          suburb: string
          longitude: number
          latitude: number
          returned: boolean
          written: boolean
          accuracy: string
          confidence: string
          match_data: Json
          created_by: string
        }[]
      }
      get_streets_by_congregation: {
        Args: {
          p_congregation_id: string
        }
        Returns: {
          id: number
          street_name: string
          suburb_id: number
          congregation_id: string
          longitude: number
          latitude: number
        }[]
      }
      insert_street_and_return: {
        Args: {
          p_street_name: string
          p_suburb_id: number
          p_longitude: number
          p_latitude: number
          p_congregation_id: string
        }
        Returns: {
          id: number
          street_name: string
          suburb_id: number
          congregation_id: string
          longitude: number
          latitude: number
        }[]
      }
      update_midweek_participants: {
        Args: {
          p_participant_id: string
          p_assignments: Database["public"]["Enums"]["midweek_assignment"][]
        }
        Returns: undefined
      }
      update_speaker_outlines: {
        Args: {
          p_speaker_id: string
          p_assignments: Json[]
        }
        Returns: undefined
      }
      update_weekend_participants: {
        Args: {
          p_participant_id: string
          p_assignments: Database["public"]["Enums"]["weekend_assignment"][]
        }
        Returns: undefined
      }
    }
    Enums: {
      _0ld: "chairman" | "prayer_opening" | "prayer_closing" | "assistant"
      midweek_assignment:
        | "chairman"
        | "prayer_opening"
        | "treasures"
        | "gems"
        | "school_1_bible_reading"
        | "school_1_apply_1"
        | "school_1_assistant_1"
        | "school_1_apply_2"
        | "school_1_assistant_2"
        | "school_1_apply_3"
        | "school_1_assistant_3"
        | "school_1_apply_4"
        | "school_1_assistant_4"
        | "school_2_bible_reading"
        | "school_2_apply_1"
        | "school_2_assistant_1"
        | "school_2_apply_2"
        | "school_2_assistant_2"
        | "school_2_apply_3"
        | "school_2_assistant_3"
        | "school_2_apply_4"
        | "school_2_assistant_4"
        | "living_1"
        | "living_2"
        | "cbs_conductor"
        | "cbs_reader"
        | "prayer_closing"
        | "counselor_2"
      weekend_assignment: "chairman" | "reader"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
