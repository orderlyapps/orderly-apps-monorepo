type PasswordProtectProps = {
  children?: React.ReactNode;
};

export const PasswordProtect = ({ children }: PasswordProtectProps) => {
  if (children) return <div>{children}</div>;
  return (
    <div
      className="centered full"
      style={{ textAlign: "center", padding: "1rem", margin: "0rem" }}
    >
      <p
        style={{
          fontWeight: "bold",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        Instructions for Installing the Proclaimer App:
      </p>
      <ol
        style={{
          textAlign: "left",
        }}
      >
        <li>Click the link below</li>
        <li>
          <p>
            On iPhone click the share sheet and scroll down to select "Add to
            Home Screen"
          </p>
          <p>
            On Android click the three dots and select "Add to Home Screen" or
            "Install"
          </p>
        </li>
      </ol>
      <a href="https://proclaimer.app" style={{ paddingBottom: "1rem" }}>
        Proclaimer App
      </a>
      <p style={{ paddingInline: "3rem", fontWeight: "bold" }}>
        This tab is under construction. Please select another tab.
      </p>
      <p style={{ paddingInline: "3rem", fontWeight: "bold" }}>
        If you have been given a password please enter your password on the
        settings page.
      </p>
    </div>
  );
};
