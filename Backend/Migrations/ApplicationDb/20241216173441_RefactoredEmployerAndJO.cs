using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations.ApplicationDb
{
    /// <inheritdoc />
    public partial class RefactoredEmployerAndJO : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "phone",
                table: "Employers",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "field",
                table: "Employers",
                newName: "Field");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Employers",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "address",
                table: "Employers",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "company_name",
                table: "Employers",
                newName: "CompanyName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Employers",
                newName: "phone");

            migrationBuilder.RenameColumn(
                name: "Field",
                table: "Employers",
                newName: "field");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Employers",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Employers",
                newName: "address");

            migrationBuilder.RenameColumn(
                name: "CompanyName",
                table: "Employers",
                newName: "company_name");
        }
    }
}
