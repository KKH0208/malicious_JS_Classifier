/* 元のURL: https://media.net */

  function getDomainBasedOnIsBeta() {
    const queryParams = new URLSearchParams(window.location.search);
    const isBeta = queryParams.get("isbeta");

    return isBeta === "true" ? "https://rlstg-cntct.media.net" : "https://cntct.media.net";
  }		


