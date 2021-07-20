# What is ChestShop?
ChestShop is our plugin for making shops, with chests! This page helps you with setup a chest shop so you can make money from selling items.
# How do I make a chest shop?
1. can make a chest shop by first getting the item id for the plugin using this command: `/iteminfo`
2. It will output some text, the important part is `Shop Sign` this line contains the id for the plugin to know what item it is. What you need is after the colon (`:`). 
For example, you have:
```
Item Information:
Full Name: Coal
Shop Sign: Coal
```
Since "Coal" is after the colon (`:`) on the line that starts with `Shop Sign`
3. Now make a sign on your chest like this (Without the numbers at the beginning of each line):
```
<PlayerName>
<Amount>
B <BuyPrice> : <SellPrice> S
<ItemID>
```
- Replace `<PlayerName>` with your Minecraft player name such as mine `Retro_Guy0`
- Replace `<Amount>` with how many you want to be sold per sale such as `64`
- Replace `<BuyPrice>` with how much you want people to pay for your item such as `10` for 10 ingame dollars
- Replace `<SellPrice>` with how much you want people to get for selling the item to you such as `5` for 5 ingame dollars
- Replace `<ItemID>` with the item id you got above from the `/iteminfo` command such as `Coal`

# All commands
These are all of the commands you can do:

| What it does                                                        | Command               |
|---------------------------------------------------------------------|-----------------------|
| Get information about the item in your hand                         | `/iteminfo`           |
| Get information about the item with the given id or name            | `/iteminfo <id/name>` |
| Get information about the looked-at shop                            | `/shopinfo`           |
| Toggle buy and sell notification messages                           | `/cstoggle`           |
| Toggles ability to buy/sell on shops (to prevent accidental buying) | `/csaccess`           |