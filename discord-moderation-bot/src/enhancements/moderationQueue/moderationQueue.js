import discord
from discord.ext import commands

class ModerationQueue(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.queue = []

    @commands.command(name='add_to_queue', help='Add a flagged content to the moderation queue')
    async def add_to_queue(self, ctx, content):
        self.queue.append(content)
        await ctx.send(f'{content} has been added to the moderation queue.')

    @commands.command(name='review_content', help='Review flagged content in the moderation queue')
    async def review_content(self, ctx):
        if not self.queue:
            await ctx.send('Moderation queue is empty.')
        else:
            flagged_content = self.queue.pop(0)
            await ctx.send(f'Reviewing flagged content: {flagged_content}')

    @commands.command(name='clear_queue', help='Clear the moderation queue')
    async def clear_queue(self, ctx):
        self.queue = []
        await ctx.send('Moderation queue has been cleared.')

def setup(bot):
    bot.add_cog(ModerationQueue(bot))