using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public interface IBaseService
{
    IQueryable<T> GetAll<T>() where T : BaseEntity;
    Task<T> Get<T>(int id) where T : BaseEntity;
    Task<T> Add<T>(T model) where T : BaseEntity;
    Task<T> Update<T>(T model) where T : BaseEntity;
    Task<bool> Delete<T>(T model) where T : BaseEntity;
    Task<bool> Delete<T>(int id) where T : BaseEntity;
}
public class BaseService : IBaseService
{
    MapAndReduceContext context;
    public BaseService(MapAndReduceContext _context)
    {
        context = _context;
    }

    public async Task<T> Add<T>(T model) where T : BaseEntity
    {
        await context.AddAsync(model);
        await context.SaveChangesAsync();
        return model;
    }

    public async Task<bool> Delete<T>(T model) where T : BaseEntity
    {
        model.Status = EnumStatus.Deleted;
        model.DeletedDate = DateTime.Now;

        context.Set<T>().Update(model);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> Delete<T>(int id) where T : BaseEntity
    {
        var model = await Get<T>(id);

        model.Status = EnumStatus.Deleted;
        model.DeletedDate = DateTime.Now;

        context.Set<T>().Update(model);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<T> Get<T>(int id) where T : BaseEntity
    {
        return await context.Set<T>().FindAsync(id);
    }

    public IQueryable<T> GetAll<T>() where T : BaseEntity
    {
        return context.Set<T>().Where(w => w.Status != EnumStatus.Deleted).AsNoTracking();
    }

    public async Task<T> Update<T>(T model) where T : BaseEntity
    {
        model.UpdatedDate = DateTime.Now;
        context.Set<T>().Update(model);
        await context.SaveChangesAsync();
        return model;
    }
}