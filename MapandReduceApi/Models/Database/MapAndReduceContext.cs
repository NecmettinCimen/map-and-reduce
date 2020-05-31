using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public class MapAndReduceContext : DbContext
{
    public MapAndReduceContext(DbContextOptions<MapAndReduceContext> options) : base(options)
    {
    }
    public DbSet<Job> Jobs { get; set; }
}
public enum EnumStatus
{
    Active,
    Passive,
    Archived,
    Deleted,
}
public class BaseEntity
{
    public int Id { get; set; }
    [Required]
    public EnumStatus Status { get; set; } = EnumStatus.Active;
    [Required]
    public DateTime CreatedDate { get; set; } = DateTime.Now;
    public DateTime? UpdatedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
}

public class Job:BaseEntity{
    [Required]
    [MaxLength(250)]
    public string Name { get; set; }

    [Required]
    [MaxLength(int.MaxValue)]
    public string MapFuncStr { get; set; }

    [Required]
    [MaxLength(int.MaxValue)]
    public string ReduceFuncStr { get; set; }
}

public class JobRunHistory:BaseEntity{
    [Required]
    [MaxLength(250)]
    public string Name { get; set; }
}