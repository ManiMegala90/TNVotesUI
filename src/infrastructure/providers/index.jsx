import * as mockConstituencyProvider from "@/infrastructure/providers/mock/constituencyProvider.jsx";
import * as restConstituencyProvider from "@/infrastructure/providers/rest/constituencyProvider.jsx";

const DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE || "mock";

export const constituencyProvider =
  DATA_SOURCE === "rest" ? restConstituencyProvider : mockConstituencyProvider;
