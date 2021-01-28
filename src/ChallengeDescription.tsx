import { Machine } from "./model/machine";

export const ChallengeDescription = (props: { machines: Machine[] }) => {
  return (
    <section>
      <div className="container">
        <h3>complete our challenge and became part of our team!</h3>
        <h4>what is MetalHeaven/Rhodium24?</h4>
        <p>
          MetalHeaven is a young Dutch startup aiming the sheet metal market.
          We're building a full sales platform (Rhodium24) for that market,
          including a top-grade feature recognition engine and a customizable
          portal for those factories' clients to follow their orders.
        </p>
        <p>
          Rhodium24 is fully customizable for each factory's needs, so each
          quotation will be calculated with a set of parameters like the cost
          price and the fees applied to the factory's machines. And this is the
          background for our challenge.
        </p>

        <h4>the problem</h4>
        <p>
          We need to define a fee for each machine. The fee is based on the
          amount of usage of that resource
        </p>
        <ul>
          <li>from 0min to 10min: 20%</li>
          <li>from 10min to 40min: 30%</li>
          <li>above 40min: 10%</li>
        </ul>

        <h4>the requirements</h4>
        <ul>
          <li>should be fun to use! (be creative)</li>
          <li>
            should show the list of machines returned by
            <pre>
              {`import { getMachines } from './services/machine-services'

await getMachines()
`}
            </pre>
          </li>
          <li>
            user should be able to add a new "level" and assign a "value" to it
          </li>
          <li>user should be able to change the "level" value</li>
          <li>
            user should be able to change the "level" unit of measure with one
            of the "abbrs" in level.abbrs
          </li>
          <li>user should be able to change the "value" value</li>
          <li>
            user should be able to save the changes (for this sample, just
            console.log)
          </li>
        </ul>
        <details>
          <summary>check the sample data</summary>
          {props.machines && (
            <pre>
              {JSON.stringify(JSON.parse(props.machines || []), null, 2)}
            </pre>
          )}
        </details>
        <h4>bonus points</h4>
        <ul>
          <li>
            how easy is to use the control or update the form? (do I hear auto
            save?)
          </li>
          <li>automated tests</li>
          <li>a reusable NPM Package with that control</li>
        </ul>
        <h4>the prize</h4>
        <ul>
          <li>
            your code will be reviewed by the MetalHeaven team (continuous
            feedback about our coding is always good, right?)
          </li>
          <li>
            be part of a fresh company and be involved directly with the product
            creation/evolution
          </li>
          <li>
            full remote work (English is not a hard requirement, be bold
            Portuguese speaker fellows!)
          </li>
          <li>
            competitive salary offer (we're looking for a full time team member,
            no freelas!)
          </li>
          <li>
            what does <strong>competitive salary offer</strong> means? you name
            it, what is a competitive offer for you? (in EUR/month)
          </li>
        </ul>
      </div>
    </section>
  );
};
