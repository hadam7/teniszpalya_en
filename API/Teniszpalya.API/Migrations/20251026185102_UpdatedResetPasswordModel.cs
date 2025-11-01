using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Teniszpalya.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedResetPasswordModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "PasswordResets");

            migrationBuilder.RenameColumn(
                name: "Lifetime",
                table: "PasswordResets",
                newName: "ExpiresAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExpiresAt",
                table: "PasswordResets",
                newName: "Lifetime");

            migrationBuilder.AddColumn<long>(
                name: "CreatedAt",
                table: "PasswordResets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
