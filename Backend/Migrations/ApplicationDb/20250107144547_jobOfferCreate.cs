using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations.ApplicationDb
{
    /// <inheritdoc />
    public partial class jobOfferCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Field",
                table: "JobOffers");

            migrationBuilder.DropColumn(
                name: "RequiredYearsOfExperience",
                table: "JobOffers");

            migrationBuilder.DropColumn(
                name: "Salary",
                table: "JobOffers");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "JobOffers",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "JobOffers",
                newName: "location");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "JobOffers",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "WorkingHours",
                table: "JobOffers",
                newName: "rating");

            migrationBuilder.RenameColumn(
                name: "PicUrl",
                table: "JobOffers",
                newName: "recommendedFor");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "JobOffers",
                newName: "date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "JobOffers",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "location",
                table: "JobOffers",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "JobOffers",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "recommendedFor",
                table: "JobOffers",
                newName: "PicUrl");

            migrationBuilder.RenameColumn(
                name: "rating",
                table: "JobOffers",
                newName: "WorkingHours");

            migrationBuilder.RenameColumn(
                name: "date",
                table: "JobOffers",
                newName: "PhoneNumber");

            migrationBuilder.AddColumn<string>(
                name: "Field",
                table: "JobOffers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "RequiredYearsOfExperience",
                table: "JobOffers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Salary",
                table: "JobOffers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
