---
title: Not Evil Sudoku
date: "2023-02-18"
description: How 8MB of sudoku changed the course of my life.
---

Not Evil Sudoku is a clean, minimalist sudoku app on the [App Store](https://appstoreconnect.apple.com/apps/1614071642/appstore).

### Background
In February of 2022, I got the urge to play sudoku and as most people would, I simply searched *sudoku* on the App Store.

To my dismay, I found that most of the top sudoku apps were riddled with ads and had horrible UX. At the time I was learning SwiftUI to build another app and I reasoned that this would be a nice project to get my feet wet. Little did I know that it would take off and I would spend hours and hours working on it. I've worked on it in some capacity over almost every weekend since April 14th when it launched!

I named it Not Evil because it was meant to be free from the spam and cheap monetization hacks that other apps used. Some sudoku apps even showed video ads in-between moves!!

Looking back this project had clear product-market fit. The App Store had few clean, well-built sudoku apps and Not Evil Sudoku filled that niche perfectly. 

### Advertisements
To be clear, I'm not against ads at all. Ads allow everyone no matter their economic background to experience and enjoy the internet. Subscriptions are great but it's hard to deny that they present a significant barrier for those without disposable income or even those from poorer countries (especially since many companies don't have parity pricing).

### User Experience
My goal was to have a sudoku solving experience that was as joyful as possible.  

##### Sticking to Apple's Design Language
This was relatively easy with SwiftUI and at the time I wasn't great at design so it was the right choice.^[I'd like to think that I'm much better now!]

It also made the app feel more at home on the user's screen and made it a lot cleaner and easier to navigate. If Apple designed a sudoku app, I like to think it would look a lot like Not Evil Sudoku.

##### Avoiding Information Overload
A lot of sudoku apps tout their customization capabilities but I found that trying to find the feature you wanted was enormously difficult. They were usually just all added to a very long list with inscrutable names. It seemed like they'd added every feature a user had ever requested and done so in a very sloppy and overwhelming way. 

I wanted Not Evil Sudoku to be customizable but without being overwhelming. Users can switch between light/dark mode, have custom app icons and change themes. Along with this, every game feature is explained in a footnote underneath its toggle.   

### Monetization
Monetization is one of the hardest parts of building anything but particularly if your product has "Not Evil" in its name. I just knew that I would get snarky comments (and I wasn't wrong).

I wanted to give users value even if they didn't pay a dime while also ensuring that the app was sustainable.

Since the app was focused solely on improving the user experience of sudoku, ads were out of the question. Subscriptions also didn't seem like a good fit. Maybe some kind of subscription for power users would be a good addition to the app in the future but it certainly wouldn't make sense for a casual sudoku player. 

I ended up going with giving users a free sudoku puzzle every day and having a one-time in-app purchase that unlocked unlimited games, charts and other perks. Overall, this strategy has worked out pretty well, although I still get the occasional "OMG YOU HAVE IN APP PURCHASES THATS SO IRONIC AND EVIL" comment.

Initally, I had two options:
- Plus - Unlimited Games
- Pro - Unlimited Games, Charts, Custom App Icons

But they differed in cost by only $2 and Pro's feature list kept getting longer and longer. At some point Plus just stopped making sense. To be honest, I don't think it ever made sense. I added it initially because I feared that people might complain about unlimited games not being free and wanted to give them a cheap way to unlock it. But, those people were going to complain anyway, no matter the price.

Product decisions based on fear are always going to be poor product decisions.

### Mental Health
Whenever YouTubers would talk about dealing with hate comments, some part of me wondered why they took random comments on the internet seriously. I felt bad for them but at I never understood it. That is until I published Not Evil Sudoku.

I think to truly understand, you need to create something and put it out there.

Someone ripping you or your work apart hurts even if they are a faceless stranger on the world wide web.

Most people on Twitter were very supportive even in the beginning when it was miles behind other sudoku apps ^[It isn't anymore!]. 

When I posted it on Reddit, I braced for impact and the anxiety of posting your work for others to comment on and judge is really something else. I got the classic "how can it be not evil when it has purchases" but otherwise people were very kind.

Most stress came from those 1-star review notifications from App Store Connect. Nowadays, I don't even flinch but in the beginning, it affected me quite a bit. I remember being unable to focus or think straight in a graph theory lecture because someone's comment was bouncing around in my head.

### Takeaways
Ultimately, if you build anything, remember this:
1. You aren't responsible for making everyone happy. As long as your product does everything you claim it does, you don't need to feel guilty. If they don't like it, they can leave, it's not your duty to satisfy their every whim.
2. If your product doesn't deliver value, people won't pay for it. Stop worrying about the price. You don't need to correct for that yourself. I was so insecure about the product that I made it unsustainably cheap. Price based on what you feel is right and you can always change course if the market proves you wrong.