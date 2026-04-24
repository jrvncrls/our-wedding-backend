export type Database = {
  public: {
    Tables: {
      guests: {
        Row: {
          id: string;
          token: string;
          first_name: string;
          last_name: string;
          email: string | null;
          last_open_link_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          token: string;
          first_name: string;
          last_name: string;
          email?: string | null;
          last_open_link_date?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          token?: string;
          first_name?: string;
          last_name?: string;
          email?: string | null;
          last_open_link_date?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      rsvp: {
        Row: {
          id: string;
          guest_id: string;
          attending: boolean;
          dietary_requirements: string | null;
          stay_the_night: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          guest_id: string;
          attending?: boolean;
          dietary_requirements?: string | null;
          stay_the_night?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          guest_id?: string;
          attending?: boolean;
          dietary_requirements?: string | null;
          stay_the_night?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'rsvp_guest_id_fkey';
            columns: ['guest_id'];
            isOneToOne: true;
            referencedRelation: 'guests';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
