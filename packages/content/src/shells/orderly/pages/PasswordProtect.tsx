type PasswordProtectProps = {
  children?: React.ReactNode;
};

export const PasswordProtect = ({ children }: PasswordProtectProps) => {
  if (children) return <div>{children}</div>;
  return (
    <div
      className="centered full"
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <p style={{ paddingInline: "3rem", fontWeight: "bold" }}>
        Please enter your password on the settings page.
      </p>
      <p style={{ paddingInline: "3rem" }}>
        Alternatively, you can install the Proclaimer App which has the same
        functionality except the option to edit schedules.
      </p>

      <p
        style={{
          fontWeight: "bold",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        Instructions for Installing the Proclaimer App:
      </p>
      <ol style={{ textAlign: "left", padding: "4rem", paddingTop: "0", paddingBottom: "0" }}>
        <li>Click the link below</li>
        <li>
          <p>
            On iPhone click the share sheet and scroll down to select "Add to
            Home Screen"
          </p>
          <p>On Android click the three dots and select "Add to Home Screen" or "Install"</p>
        </li>
      </ol>
      <a href="https://proclaimer.pages.dev/home">Proclaimer App</a>
    </div>
  );
};
