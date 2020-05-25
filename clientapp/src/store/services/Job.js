import baseService from './BaseService';

var jobService = {
    post: async (model) => {
        var result = await baseService.post('job', model);
        return result;
    },
    getall: async () => {
        var result = await baseService.get('job');
        return result;
    },
    get: async (id) => {
        var result = await baseService.get(`job/${id}`);
        return result;
    },
    put: async (model) => {
        var result = await baseService.put(`job`, model);
        return result;
    },
    delete: async (id) => {
        var result = await baseService.delete(`job/${id}`);
        return result;
    },
}

export default jobService;