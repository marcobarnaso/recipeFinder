import { useState, useEffect } from "react";
import youtube from "../services/Youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(items);
  };

  return [videos, search];
};

export default useVideos;
