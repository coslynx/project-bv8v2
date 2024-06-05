import discord
import requests

class ThirdPartyIntegration:
    def __init__(self, bot):
        self.bot = bot

    async def integrate_with_third_party_service(self, message):
        try:
            response = requests.post('https://third-party-service.com/api', json={'message': message})
            if response.status_code == 200:
                return response.json()
            else:
                return None
        except Exception as e:
            print(f'Error integrating with third party service: {e}')
            return None

    async def on_message(self, message):
        if message.author == self.bot.user:
            return

        result = await self.integrate_with_third_party_service(message.content)
        if result:
            await message.channel.send(result['response'])

def setup(bot):
    bot.add_cog(ThirdPartyIntegration(bot))