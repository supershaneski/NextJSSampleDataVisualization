import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Banner from '../components/banner';
import SideMenu from '../components/sidemenu';
import BlogContent from '../components/blogcontent';
import BottomPanel from '../components/bottompanel';
import { scrollHandler } from '../global/settings';

const layout = {
    banner: {
        top: 50,
        height: 200
    },
    main: {
        top: 250
    }
};

const Index = (props) => {
    
    const recent = props.contents[0].document;
    
    return (
        <>
        <Banner height={layout.banner.height} top={layout.banner.top} src={`/images/${recent.data.hero_image}`} />
        <main>
            
            <article className="contents">
                <BlogContent title={recent.data.title} author={recent.data.author} date={recent.data.date} contents={recent.content} />
                <BottomPanel selected={props.contents[0].slug} contents={props.contents} />
            </article>
            
            <SideMenu contents={props.contents} />

        </main>
        <script dangerouslySetInnerHTML={{__html: scrollHandler()}} />
        <style jsx>
            {`
            main {
                background-color: white;
                margin-top: ${layout.main.top}px;
                
            }
            .contents {
                background-color: white;
                position: relative;
                width: 70%;
                display: inline-block;
                vertical-align: top;
                z-index: 2;
                float: right;
            }
            .contents * {                
                color: #222;
            }
            @media only screen and (max-width : 640px) {
                .contents {
                    width: 100%;
                }
            }
            `}
        </style>
        </>
        
    )
}


Index.getInitialProps = async function() {
    
    const posts = (context => {
        const keys = context.keys();
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key
              .replace(/^.*[\\\/]/, '')
              .split('.')
              .slice(0, -1)
              .join('.')
            const value = values[index]
            const document = matter(value.default)
            return {
              document,
              slug,
            }
        });
        return data;
    })(require.context('../contents', true, /\.md$/))

    // sort to most recent
    posts.sort((a, b) => {
        const d0 = new Date(a.document.data.date);
        const d1 = new Date(b.document.data.date);
        return d0 > d1 ? -1: d0 < d1 ? 1: 0;
    });

    return {
        contents: posts
    }
}

export default Index;