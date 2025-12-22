export const PackageRun = ({ command }) => {
  const text = command.trim();

  return (
    <CodeGroup>
      <CodeBlock language="bash" filename="pnpm">
        {text.replace(/^run\b/gm, "pnpm run")}
      </CodeBlock>

      <CodeBlock language="bash" filename="npm">
        {text.replace(/^run\b/gm, "npm run")}
      </CodeBlock>

      <CodeBlock language="bash" filename="yarn">
        {text.replace(/^run\b/gm, "yarn run")}
      </CodeBlock>

      <CodeBlock language="bash" filename="bun">
        {text.replace(/^run\b/gm, "bun run")}
      </CodeBlock>
    </CodeGroup>
  );
};
