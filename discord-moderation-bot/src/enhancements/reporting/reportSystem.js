import discord
from discord.ext import commands

class ReportSystem(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message):
        if message.author == self.bot.user:
            return
        # Logic for checking inappropriate content and flagging it

    @commands.command(name='report', help='Report inappropriate content')
    async def report(self, ctx, message_id: int, reason: str):
        # Logic for users to report inappropriate content

    @commands.command(name='review', help='Review reported content')
    async def review(self, ctx, message_id: int):
        # Logic for moderators to review reported content

    @commands.command(name='clear_report', help='Clear reported content after review')
    async def clear_report(self, ctx, message_id: int):
        # Logic for clearing reported content after review

def setup(bot):
    bot.add_cog(ReportSystem(bot))