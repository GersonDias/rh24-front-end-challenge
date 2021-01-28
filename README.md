# MetalHeaven frontend challenge

are you an awesome front end developer? **we're looking for you!**

### complete our challenge and became part of our team!

## what is MetalHeaven/Rhodium24?

MetalHeaven is a young Dutch startup aiming at the sheet metal market.
We're building a full sales platform (Rhodium24) for that market,
including a top-grade feature recognition engine and a customizable
portal for those factories' clients to follow their orders.

Rhodium24 is fully customizable for each factory's needs, so each
quotation will be calculated with a set of parameters like the cost
price and the fees applied to the factory's machines. And this is the
background for our challenge.

## the problem</h4>

We need to define a fee for each machine. The fee is based on the
amount of usage of that resource

- from 0min to 10min: 20%
- from 10min to 40min: 30%
- above 40min: 10%

## the requirements

- should be fun to use! (be creative)
- should show the list of machines returned by

```javascript
import { getMachines } from "./services/machine-services";

await getMachines();
```

- user should be able to add a new "level" and assign a "value" to it
- user should be able to change the "level" value
- user should be able to change the "level" unit of measure with one of the "abbrs" in level.abbrs
- user should be able to change the "value" value
- user should be able to save the changes (for this sample, just `console.log`)

## codesandbox

you can use this [codesandbox](https://codesandbox.io/s/reverent-chatelet-8wc5f?file=/src/app.tsx) as start point

## bonus points

- how easy is to use the control or update the form? (do I hear auto save?)
- automated tests
- a reusable NPM Package with that control

## the prize

- your code will be reviewed by the MetalHeaven team (continuous feedback about our coding is always good, right?)
- be part of a fresh company and be involved directly with the product creation/evolution
- full remote work (English is not a hard requirement, be bold Portuguese speaker fellows!)
- **competitive salary offer** (we're looking for a full time team member, no freelas!)
