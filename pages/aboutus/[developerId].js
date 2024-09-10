import { useRouter } from "next/router";

function Developer() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();
  const developerId = router.query.developerId;
  if (developerId === undefined) {
    return;
  }
  const list = details.find((list) => list.id == developerId);
  let detail;
  if (list) {
    detail = `${list.name} ${list.role}`;
  } else {
    detail = "Developer doesn't exist";
  }
  return <h1>{detail}</h1>;
}
export default Developer;
