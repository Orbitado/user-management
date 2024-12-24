import { Supabase } from "@/utils/supabase.client";
import { User } from "@/types/types";

class UsersManager {
  async getAllUsers(): Promise<User[]> {
    const { data, error } = await Supabase.from("Users").select("*");

    if (error) {
      throw new Error(`Failed to retrieve users: ${error.message}`);
    }

    if (!data) {
      throw new Error("No data returned from Supabase");
    }

    return data;
  }

  async getUserById(id: number): Promise<User> {
    const { data, error } = await Supabase.from("Users")
      .select("*")
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to retrieve user: ${error.message}`);
    }

    if (!data) {
      throw new Error("No data returned from Supabase");
    }

    return data[0];
  }

  async createUser(user: User): Promise<User> {
    const { data, error } = await Supabase.from("Users").insert(user);

    if (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }

    if (!data) {
      throw new Error("No data returned from Supabase");
    }

    return data[0];
  }

  async updateUser(user: User): Promise<User> {
    const { data, error } = await Supabase.from("Users")
      .update(user)
      .eq("id", user.id);

    if (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }

    if (!data) {
      throw new Error("No data returned from Supabase");
    }

    return data[0];
  }

  async deleteUser(userId: number): Promise<void> {
    if (userId == null) {
      throw new Error("User ID is null or undefined");
    }

    const { error } = await Supabase.from("Users").delete().eq("id", userId);

    if (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
}

export const usersManager = new UsersManager();
