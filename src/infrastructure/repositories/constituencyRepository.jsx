import { constituencyProvider } from "@/infrastructure/providers";

export const constituencyRepository = {
  getConstituencies() {
    return constituencyProvider.getConstituencies();
  },

  getConstituencyById(id) {
    return constituencyProvider.getConstituencyById(id);
  },

  getDirectoryData() {
    return constituencyProvider.getDirectoryData();
  },

  getSpotlightConstituencies() {
    return constituencyProvider.getSpotlightConstituencies();
  },

  getConstituencyDetail(id) {
    return constituencyProvider.getConstituencyDetail(id);
  },
};
