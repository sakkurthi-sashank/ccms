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
      address: {
        Row: {
          address: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_address_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
        ]
      }
      case_details: {
        Row: {
          created_at: string
          description: string
          id: string
          registered_advocate: string
          registered_against_user: string
          registered_by_user: string
          status: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          registered_advocate: string
          registered_against_user: string
          registered_by_user: string
          status: string
          title: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          registered_advocate?: string
          registered_against_user?: string
          registered_by_user?: string
          status?: string
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_case_details_registered_advocate_fkey"
            columns: ["registered_advocate"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "public_case_details_registred_against_user_fkey"
            columns: ["registered_against_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "public_case_details_registred_by_user_fkey"
            columns: ["registered_by_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
        ]
      }
      case_documents: {
        Row: {
          case_id: string | null
          created_at: string
          document_name: string
          document_url: string
          id: string
        }
        Insert: {
          case_id?: string | null
          created_at?: string
          document_name: string
          document_url: string
          id?: string
        }
        Update: {
          case_id?: string | null
          created_at?: string
          document_name?: string
          document_url?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_case_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "case_details"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_us: {
        Row: {
          created_at: string
          display_name: string
          email: string
          id: string
          message: string
        }
        Insert: {
          created_at?: string
          display_name: string
          email: string
          id?: string
          message: string
        }
        Update: {
          created_at?: string
          display_name?: string
          email?: string
          id?: string
          message?: string
        }
        Relationships: []
      }
      judge_verdicts: {
        Row: {
          case_id: string
          created_at: string
          id: string
          judge_id: string
          vertict: string | null
        }
        Insert: {
          case_id: string
          created_at?: string
          id?: string
          judge_id: string
          vertict?: string | null
        }
        Update: {
          case_id?: string
          created_at?: string
          id?: string
          judge_id?: string
          vertict?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_judge_verdicts_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "case_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_judge_verdicts_judge_id_fkey"
            columns: ["judge_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          role: Database["public"]["Enums"]["role"]
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id: string
          role?: Database["public"]["Enums"]["role"]
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["role"]
        }
        Relationships: [
          {
            foreignKeyName: "public_profile_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      role: "user" | "judge" | "advocate"
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
