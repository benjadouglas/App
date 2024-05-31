import { EnterForm } from "@/components/enter-form";

export default function Login() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <EnterForm isCreatingAccount={true} />
    </div>
  );
}
