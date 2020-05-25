using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MapandReduceApi.Migrations
{
    public partial class JobsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    DeletedDate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    MapFuncStr = table.Column<string>(maxLength: 2147483647, nullable: false),
                    ReduceFuncStr = table.Column<string>(maxLength: 2147483647, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jobs");
        }
    }
}
