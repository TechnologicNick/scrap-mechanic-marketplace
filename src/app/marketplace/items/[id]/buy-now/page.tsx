import Button from "@/components/button";

export default function BuyNowPage() {
  return (
    <main>
      <h1>You don't have enough Wonk Credits for this transaction!</h1>
      <Button primary>Get more Wonk Credits</Button>
      <Button>Cancel</Button>
    </main>
  );
}
