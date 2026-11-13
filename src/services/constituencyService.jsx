// src/features/constituency/services/constituencyService.js

import { constituencyRepository } from "@/infrastructure/repositories/constituencyRepository";

export const constituencyService = {
  async getConstituencies() {
    return constituencyRepository.getConstituencies();
  },

  async getConstituencyById(id) {
    return constituencyRepository.getConstituencyById(id);
  },

  async getDirectoryData() {
    return constituencyRepository.getDirectoryData();
  },

  async getSpotlightConstituencies() {
    return constituencyRepository.getSpotlightConstituencies();
  },

  async getConstituencyDetail(id) {
    return constituencyRepository.getConstituencyDetail(id);
  },
};
