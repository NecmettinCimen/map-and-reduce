var baseUrl = "https://map-and-reduce.necmettincimen.xyz"

var baseService = {
    post: async (url, model) => {
        var response = await fetch(`${baseUrl}/${url}`, { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(model) })
        if (response.status === 400) {
            return {
                success:false,
                errorMsg:'Lütfen Girdiğiniz Bilgileri Kontrol Ediniz.'
            }
        }else if (response.status === 500) {
            return {
                success:false,
                errorMsg:'Sunucu Hatası Lütfen Data Sonra Tekrar Deneyiniz.'
            }
        } else {
            var result = await response.json();
            return result;
        }
    },
    get: async (url) => {
        var response = await fetch(`${baseUrl}/${url}`, { method: 'get', headers: { 'content-type': 'application/json' } })
        var result = await response.json();
        return result;
    },
    put: async (url, model) => {
        var response = await fetch(`${baseUrl}/${url}`, { method: 'put', headers: { 'content-type': 'application/json' }, body: JSON.stringify(model) })
        var result = await response.json();
        return result;
    },
    delete: async (url) => {
        var response = await fetch(`${baseUrl}/${url}`, { method: 'delete', headers: { 'content-type': 'application/json' } })
        var result = await response.json();
        return result;
    }
}

export default baseService;