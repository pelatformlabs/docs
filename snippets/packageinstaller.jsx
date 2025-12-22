export const PackageInstaller = ({ command }) => {
  const text = command.trim();

  return (
    <CodeGroup>
      <CodeBlock language="bash" filename="pnpm">
        {text.replace(/^installer\b/gm, "pnpm add")}
      </CodeBlock>

      <CodeBlock language="bash" filename="npm">
        {text.replace(/^installer\b/gm, "npm install")}
      </CodeBlock>

      <CodeBlock language="bash" filename="yarn">
        {text.replace(/^installer\b/gm, "yarn add")}
      </CodeBlock>

      <CodeBlock language="bash" filename="bun">
        {text.replace(/^installer\b/gm, "bun add")}
      </CodeBlock>
    </CodeGroup>
  );
};
