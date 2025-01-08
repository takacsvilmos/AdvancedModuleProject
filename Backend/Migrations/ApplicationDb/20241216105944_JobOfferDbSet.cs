using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations.ApplicationDb
{
    /// <inheritdoc />
    public partial class JobOfferDbSet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JobOffer_Employers_EmployerId",
                table: "JobOffer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobOffer",
                table: "JobOffer");

            migrationBuilder.RenameTable(
                name: "JobOffer",
                newName: "JobOffers");

            migrationBuilder.RenameIndex(
                name: "IX_JobOffer_EmployerId",
                table: "JobOffers",
                newName: "IX_JobOffers_EmployerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobOffers",
                table: "JobOffers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_JobOffers_Employers_EmployerId",
                table: "JobOffers",
                column: "EmployerId",
                principalTable: "Employers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JobOffers_Employers_EmployerId",
                table: "JobOffers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobOffers",
                table: "JobOffers");

            migrationBuilder.RenameTable(
                name: "JobOffers",
                newName: "JobOffer");

            migrationBuilder.RenameIndex(
                name: "IX_JobOffers_EmployerId",
                table: "JobOffer",
                newName: "IX_JobOffer_EmployerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobOffer",
                table: "JobOffer",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_JobOffer_Employers_EmployerId",
                table: "JobOffer",
                column: "EmployerId",
                principalTable: "Employers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
