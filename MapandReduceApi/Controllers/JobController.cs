using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MapandReduceApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly IBaseService _baseService;
        public JobController(IBaseService baseService)
        {
            _baseService = baseService;
        }

        [HttpPost]
        public async Task<ResultModel> Post(Job model)
        {
            try
            {
                var result = await _baseService.Add(model);
                return new ResultModel(result);
            }
            catch (System.Exception ex)
            {
                return new ResultModel(ex.Message);
            }
        }
        [HttpGet]
        public async Task<ResultModel> Get()
        {
            try
            {
                var result = await _baseService.GetAll<Job>().ToListAsync();
                return new ResultModel(result);
            }
            catch (System.Exception ex)
            {
                return new ResultModel(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<ResultModel> Get(int id)
        {
            try
            {
                var result = await _baseService.Get<Job>(id);
                return new ResultModel(result);
            }
            catch (System.Exception ex)
            {
                return new ResultModel(ex.Message);
            }
        }
        [HttpPut]
        public async Task<ResultModel> Put(Job model)
        {
            try
            {
                var result = await _baseService.Update(model);
                return new ResultModel(result);
            }
            catch (System.Exception ex)
            {
                return new ResultModel(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<ResultModel> Delete(int id)
        {
            try
            {
                var result =await _baseService.Delete<Job>(id);
                return new ResultModel(result);
            }
            catch (System.Exception ex)
            {
                return new ResultModel(ex.Message);
            }
        }
    }
}
