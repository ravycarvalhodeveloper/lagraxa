
export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {

    try {
        const { objects }: PostProps = await getItemBySlug(slug)
        .catch(() => {
            return {
                title: "LaGraxa - Sua oficina especializada!",
                description: "Oficina de carros em Fortaleza"
            }        
        })

        return {
            title: `LaGraxa - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            openGraph: {
                title: `LaGraxa - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                  index: true,
                  follow: true,
                  noimageindex: true
                }
            }
        }


    }catch(err) {
        return {
            title: "LaGraxa - Sua oficina especializada!",
            description: "Oficina de carros em Fortaleza"
        }
    }
}


