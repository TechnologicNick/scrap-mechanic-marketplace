import Section from "@/components/section";
import styles from "./system-requirements.module.scss";
import text from "@/styles/text.module.scss";

export default function SystemRequirements() {
  return (
    <Section heading="System Requirements" className={styles.systemRequirements} id="system-requirements">
      <Section.Columns columnCount={2} columnWidth={"20rem"}>
        <div>
          <h3>Minimum Requirements</h3>
          <span className={text.muted}>Requires a 64-bit processor and operating system</span>
          <Section.Columns as="dl" columnCount={2} columnWidth={"12rem"}>
            <div>
              <dt>Operating System</dt>
              <dd>Microsoft Windows 7 or later</dd>
            </div>
            <div>
              <dt>Processor</dt>
              <dd>2.6 GHz Dual Core</dd>
            </div>
            <div>
              <dt>Memory</dt>
              <dd>8 GB RAM</dd>
            </div>
            <div>
              <dt>Video</dt>
              <dd>
                Intel HD Graphics 520 or a dedicated graphics card with 2 GB memory and DirectX feature level 10.1
              </dd>
            </div>
            <div>
              <dt>DirectX</dt>
              <dd>Version 11</dd>
            </div>
            <div>
              <dt>Network</dt>
              <dd>Broadband Internet connection</dd>
            </div>
            <div>
              <dt>Storage</dt>
              <dd>15 GB available space</dd>
            </div>
          </Section.Columns>
        </div>
        <div>
          <h3>Recommended Specifications</h3>
          <span className={text.muted}>Requires a 64-bit processor and operating system</span>
          <Section.Columns as="dl" columnCount={2} columnWidth={"12rem"}>
            <div>
              <dt>Operating System</dt>
              <dd>Microsoft Windows 7 or later</dd>
            </div>
            <div>
              <dt>Processor</dt>
              <dd>Intel Core i5 6600K</dd>
            </div>
            <div>
              <dt>Memory</dt>
              <dd>16 GB RAM</dd>
            </div>
            <div>
              <dt>Video</dt>
              <dd>NVIDIA GeForce GTX 970</dd>
            </div>
            <div>
              <dt>DirectX</dt>
              <dd>Version 11</dd>
            </div>
            <div>
              <dt>Network</dt>
              <dd>Broadband Internet connection</dd>
            </div>
            <div>
              <dt>Storage</dt>
              <dd>15 GB available space</dd>
            </div>
          </Section.Columns>
        </div>
      </Section.Columns>
    </Section>
  );
}
