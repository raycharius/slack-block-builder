# Motivations

Today's world is all about **simplicity**. Sweeping away the mudane and maximizing focus on things that actually *matter* – the things that produce the most impact. Whether it be in our personal lives or our professional ones.

In the professional world, a few years back, [Slack](https://slack.com) came to the rescue by providing a single centralized place for company communications. Along with it, they brought a small piece of magic that is their developer platform for creating Slack apps. It provides companies with great, simple tools to automate repetitive tasks, engage employees, and make communication more effective.

I've been a fan of the platform for quite some time, having written multiple apps for [MacPaw](https://macpaw.com), where I work as a Product Manager. 

But when [COVID-19](https://en.wikipedia.org/wiki/COVID-19_pandemic) took the world by surprise, a lot of companies were faced with new challenges, as WFH became the standard: 

* How do we keep communication up to par?
* How do we keep our culture alive and flowing?
* How do we facilitate the more interactive meetings?  

And in this respect, Slack apps were no longer just an option, but a necessity. 

I found myself writing more Slack apps, and before long, there was an entire Slack app backlog at work, as well as a backlog of ideas for personal projects.

But the one issue with Slack's wonderful platform is how UIs are composed. The [Slack Block Kit](https://api.slack.com/block-kit) framework is super powerful, but when it comes to code maintainability, it's a place where there's room for growth.

As such, I set out to create **Block Builder**, in hopes to make the code for building Slack apps: 

* Tons more maintainable.
* A lot more reusable.
* A little more testable.

I spend a good amount of time around macOS and iOS developers, so I knew a bit about how UIs are composed in Swift, with the [SwiftUI library](https://developer.apple.com/documentation/swiftui), and found it extremely straightforward and declarative.

So I set out to find a way to compose Slack app UI in a similar way. In hopes it would help myself and others create awesome experiences, without having to memorize the format of the JSON payloads for the Slack API.

Enjoy!