import { useState, useEffect } from "react"

export function VersionDisplay() {
  const [version, setVersion] = useState("Error Fetching Version Data"); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/CidCaribou/Executor-Menu/main/Versions.json")
      .then(response => response.json())
      .then(data => {
        const currentVersion = Object.keys(data).find(
          key => data[key] === "Current"
        );
        
        if (currentVersion) {
          setVersion(currentVersion);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching version:", error);
        setLoading(false);
      });
  }, []);

  return <span>{version}</span>;
}
