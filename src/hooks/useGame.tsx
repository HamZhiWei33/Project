import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform:Platform}[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("", { signal: controller.signal })
      .then((response: any) => setGames(response.data.results))
      .catch((error: any) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
  }, []); // Add the empty array to avoid infinite re-renders

  return { games, error };
};

export default useGame;
