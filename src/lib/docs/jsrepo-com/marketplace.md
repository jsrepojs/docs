---
title: jsrepo.com Marketplace
description: Monetize your registries.
lastUpdated: 5-15-2025
---

Before now monetizing a registry required setting up your own auth and payments with the [jsrepo.com](https://www.jsrepo.com) marketplace you can make that our problem.

## Publishing to the Marketplace

Here we will cover just the minimum details required to publish your registry as a marketplace registry. For a more in depth tutorial see our [provider documentation for jsrepo.com](/docs/registry/providers/jsrepo)

To publish a registry to the marketplace you can set the `access` field in your `jsrepo-manifest.json` to `marketplace`:

> This can also be updated once published from the website under the settings for your registry

```jsonc
{
	"access": "marketplace"
}
```

Once published with the access set to `marketplace` you need to setup your Stripe Connect account. This can be done in your [Account Settings](https://www.jsrepo.com/account/settings).

Once you have done that, link your account to the registry in the settings for your registry.

> If your Stripe Connect account was setup before publishing your registry then the registry has already been automatically linked to your account.

Next you will need to configure pricing for your registry this can be done from the `pricing` tab of your registry.

jsrepo.com offers 2 pricing methods, **Individual** and **Organization**. Purchasing an **Individual** license grants the user access to your registry. Organizations will need to purchase an **Organization** license for all members of their organization to have access. Users and organizations that purchase your registry will have **lifetime** access and unlimited downloads.

> A normal pricing difference from **Individual** -> **Organization** would be around 2-3x as expensive

Once you have finished setting up pricing and are happy with your product go back to your registry settings and turn on `List on Marketplace`.

Now users can view and purchase your registry from the marketplace!

## Managing Registry Prices

jsrepo.com allows you to update the price of your registry as any time (although we can't help with the backlash that can come with that).

Prices can be managed by navigating to the `pricing` tab of your registry and clicking on the pencil icon on the top right corner of the price card.

Here you can change the price of your registry and even add short or long term discounts!

## Viewing Your Transactions

You can view your transactions from the express dashboard by navigating to your [Account Settings](https://www.jsrepo.com/account/settings) once your account has been linked.

> You can also complete additional tasks for compliance here

## Application Fees

> jsrepo.com is currently only configured to allow payments from the United States there will be additional fees for other countries once they are supported

When someone purchases a license to your registry the jsrepo.com fee is `5% + 30¢`.

Since jsrepo.com is build on top of Stripe we cover their `2.9% + 30¢` fee from ours.

### Payout Fees

Since jsrepo.com using Stripe Connect under the hood we need to pass on additional fees at payout.

- Payout fee `0.25% + $2.25`
