---
title: jsrepo.com Introduction
description: The future of component registries.
lastUpdated: 5-15-2025
---

<script>
    import * as Accordion from '$lib/components/ui/accordion'
</script>

[jsrepo.com](https://www.jsrepo.com) was born out of the lack of another project like it. It is essentially npm for your registries. It's goal is to be the best way to host your registries.

It solves many of the problems you may face while distributing your registries through other providers such as:

- 🔄 Versioning - Full semver compatibility
- 🔒 Private access - Publish and share your code privately with your team
- 🔍 Discovery - Others can search and discover your registry on the jsrepo.com website

### FAQ

<Accordion.Root type="multiple">
<Accordion.Item value="q-1">
<Accordion.Trigger>
Why host my private code here instead of in my own registry?
</Accordion.Trigger>
<Accordion.Content>
jsrepo.com has incredible features for sharing your code with your team. Registries owned by organizations can be accessed by any of the organization members using their own PAT. Allowing them to access your registry without having to setup all of that yourself.
</Accordion.Content>
</Accordion.Item>
<Accordion.Item value="q-2">
<Accordion.Trigger>
What are the benefits of semver enabled registries if I already own the code?
</Accordion.Trigger>
<Accordion.Content>
There are instances where big breaking changes can't just be migrated straight away and it's necessary to pin to a version. Also since jsrepo.com versions are immutable the jsrepo CLI can cache the registry at that version improving response times.
</Accordion.Content>
</Accordion.Item>
</Accordion.Root>
