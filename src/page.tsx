import LoginForm from "@/components/login-form"

export default function Page() {
  return (
    <main className="min-h-screen relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-2U4uOj7154JUjx2WquhYS55cFSdQSo.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3baa1]/80 to-[#ed5689]/80" />
      </div>
      <div className="relative min-h-screen flex items-center justify-end p-6">
        <LoginForm />
      </div>
    </main>
  )
}

