import api from "./axiosConfig";

export default class Service {
  async getAll() {
    return await api.get("task");
  }
  async create(newTask) {
    return await api.post("task", newTask);
  }
  async delete(id) {
    return await api.delete(`task/${id}`);
  }
  async update(id, data) {
    return await api.patch(`task/${id}`, data);
  }
}
