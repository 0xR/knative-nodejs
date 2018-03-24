import Link from 'next/link'

const FeedLink = ({href, label}) => (
	<span>
		<Link prefetch href={href}><a>{label}</a></Link>
		<style jsx>{`
			{
				padding: 6px 4px;
			}
			a {
				color: white;
				text-decoration: none;
				font-size: 16px;
			}
		`}</style>
	</span>
)

export default () => (
	<nav>
		<FeedLink href={'/'} label={'▲'} />
		{
			['news', 'newest', 'ask', 'show', 'jobs'].map(p => {
				return <FeedLink key={p} href={`/${p}`} label={p.toUpperCase()} />
			})
		}
		<style global jsx>{`
			body {
				font-family: Helvetica, sans-serif;
			};
			a {
				color: #0e0e0e;
				text-decoration: none;
			};
			@media (max-width: 600px) {
				header {
					justify-content: none;
				}
			};
			nav {
				text-align: center;
				background-color: black;
				color: white;
				padding: 12px;
				position: fixed;
				z-index: 1000;
				top: 0;
				left: 0;
				right: 0;
			}
		`}</style>
	</nav>
)
