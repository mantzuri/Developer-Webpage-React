import React from "react";
import ReactDOM from "react-dom";
import Content from "./content.js";
import registerServiceWorker from "./registerServiceWorker";

function FeaturedPost(props) {
	var iconImage = props.icon
		? "url(" + props.icon + ")"
		: "url('assets/images/avatar.png')";
	var imageSize = props.icon ? "100%" : "50%";
	var imageStyle = { backgroundImage: iconImage, backgroundSize: imageSize };
	return (
		<div className="mdl-cell mdl-cell--top mdl-cell--12-col mdl-card mdl-shadow--4dp">
			<div className="mdl-card__supporting-text meta">
				<div className="minilogo" style={imageStyle} />
				<div>
					<h4>{props.title}</h4>
					<h5>{props.subTitle}</h5>
				</div>
			</div>
			{props.backgroundImage ? (
				<div className="project-image">
					<img
						className="image-responsive"
						src={props.backgroundImage}
						alt=""
					/>
				</div>
			) : null}
			<div
				className="mdl-color-text--grey-600 mdl-card__supporting-text"
				dangerouslySetInnerHTML={{ __html: props.desc }}
			/>
		</div>
	);
}

function MinorPosts() {
	const posts = Content.minorPostsContent.map((l, i) => (
		<span key={l.title + i}>
			<h5>{l.title}</h5>
			<div className="mdl-color-text--grey-600 mdl-card__supporting-text">
				{l.imageUrl ? (
					<div>
						<img
							className="image-responsive small-image"
							src={l.imageUrl}
							alt=""
						/>
					</div>
				) : null}
				<div dangerouslySetInnerHTML={{ __html: l.desc }} />
			</div>
			<hr className="divider" />
		</span>
	));
	return (
		<div className="mdl-cell mdl-cell--top mdl-cell--12-col mdl-card mdl-shadow--4dp">
			<div className="mdl-card__supporting-text meta">
				<h5> Other Projects </h5>
			</div>
			{posts}
		</div>
	);
}

function InfoPost() {
	const infoList = Content.infoLinks.map((l, i) => (
		<li key={l.desc + i}>
			<i className={l.icon} />
			{l.link === "" ? l.desc : <a href={l.link}> {l.desc} </a>}
		</li>
	));

	return (
		<div className="mdl-cell mdl-cell--top mdl-cell--12-col mdl-card mdl-shadow--4dp">
			<div className="mdl-color-text--grey-600 mdl-card__supporting-text">
				<ul className="list-unstyled">{infoList}</ul>
			</div>
		</div>
	);
}

function SidePost(props) {
	var postContent;
	if (props.title === "Skills") {
		postContent = Content.skills.map((l, i) => (
			<span key={l.title + i}>
				{l.moreonLink ? (
					<div className="mdl-color-text--grey-600 mdl-card__supporting-text">
						<a href={l.moreonLink} target="_blank">
							<i className="fa fa-external-link-alt" />
							<span className="more-link">{l.title}</span>
						</a>
					</div>
				) : (
					<span>
						<div className="skill-title">{l.title}</div>
						<div className="progress">
							<div className="progress-bar" />
						</div>
					</span>
				)}
			</span>
		));
	} else if (props.title === "Testimonials") {
		postContent = Content.testemonials.map((l, i) => (
			<span key={l.name + i}>
				<div className="myQuote q1">
					<blockquote>
						<i className="fa fa-quote-left" />
						<q>{l.quote}</q>
					</blockquote>
				</div>
				<cite>
					{l.name}
					<br />
					<p className="cite-title">{l.title}</p>
				</cite>
			</span>
		));
	} else if (props.title === "Education") {
		postContent = Content.education.map((l, i) => (
			<span key={l.title + i}>
				<div className="mdl-card__supporting-text">
					{" "}
					<i className="fa fa-graduation-cap" /> {"  "}
					{l.title} <div className="cite-title">{l.school}</div>
				</div>
			</span>
		));
	} else if (props.title === "Certificates & Scholarships") {
		postContent = Content.certificates.map((l, i) => (
			<span key={l.title + i}>
				<div className="mdl-card__supporting-text">
					<i className="fa fa-certificate" /> {"  "}
					{l.title} <div className="cite-title">{l.organization}</div>
				</div>
			</span>
		));
	} else if (props.title === "Credits & Attribution") {
		postContent = Content.credits.map((l, i) => (
			<span key={l.title + i}>
					<a herf={l.link}>
						<i className="fa fa-external-link-alt" />
						{l.title}{" "}
					</a>
					<br /> <br />
			</span>
		));
		postContent = <div className="mdl-card__supporting-text"> {postContent} </div>
	}

	return (
		<div className="mdl-cell mdl-cell--top mdl-cell--12-col mdl-card mdl-shadow--4dp">
			<div className="mdl-card__supporting-text meta">
				<div className="no-image-post-title">
					<h4>{props.title}</h4>
				</div>
			</div>
			<div className="mdl-color-text--grey-600 mdl-card__supporting-text">
				{postContent !== undefined ? postContent : null}
			</div>
		</div>
	);
}

function WorkExperience() {
	const posts = Content.workExperience.map((l, i) => (
		<span key={l.title + i}>
			<h5>
				{l.title}
				{l.subTitle ? (
					<span className="sub-title"> {" - " + l.subTitle} </span>
				) : null}
			</h5>
			{l.desc ? (
				<div
					className="mdl-color-text--grey-600 mdl-card__supporting-text"
					dangerouslySetInnerHTML={{ __html: l.desc }}
				/>
			) : null}
		</span>
	));
	return (
		<div className="mdl-cell mdl-cell--top mdl-cell--12-col mdl-card mdl-shadow--4dp">
			<div className="mdl-card__supporting-text meta">
				<h5> WorkExperience </h5>
			</div>
			{posts}
		</div>
	);
}

function TopBar() {
	const socialList = Content.socialLinks.map((l, i) => (
		<li key={l.herf + i} className="social-list-item">
			<a href={l.herf}>
				<i className={l.class} />
			</a>
		</li>
	));
	const style = {
		backgroundImage: "url(" + Content.topBarContent[0].avatar + ")"
	};
	return (
		<header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
			<div className="mdl-layout__header-row portfolio-logo-row">
				<span className="mdl-layout__title">
					<div className="portfolio-logo" style={style} />
					<span className="mdl-layout__title" />
				</span>
				<span className="portfolio-name">
					<h4>{Content.topBarContent[0].name}</h4>
					<h5>{Content.topBarContent[0].role}</h5>
				</span>
				<div className="profile-content pull-right">
					<ul className="social list-inline">{socialList}</ul>
				</div>
			</div>
		</header>
	);
}

function Footer() {
	const links = Content.footerLinks.map((l, i) => (
		<div className="mdl-mini-footer--left-section">
			<a href={l.link} target="_blank">
				<img className="image-responsive" src={l.src} alt={l.alt} />
			</a>
		</div>
	));
	return <footer className="mdl-mini-footer">{links}</footer>;
}

function renderPosts() {
	const posts = Content.postsContent.map(p => (
		<FeaturedPost
			key={p.title}
			title={p.title}
			subTitle={p.subTitle}
			desc={p.desc}
			backgroundImage={p.imageUrl}
			icon={p.logo}
		/>
	));
	return (
		<div className="mdl-grid mdl-grid--no-spacing portfolio-max-width">
			<div className="mdl-cell mdl-cell--top mdl-cell--8-col transparent">
				<div className="mdl-grid  portfolio-max-width">
					{posts}
					<MinorPosts />
					<WorkExperience />
				</div>
			</div>
			<div className="mdl-cell mdl-cell--top mdl-cell--4-col mdl-cell--8-col-tablet transparent">
				<div className="mdl-grid  portfolio-max-width">
					<InfoPost />
					<SidePost title="Skills" />
					<SidePost title="Testimonials" />
					<SidePost title="Education" />
					<SidePost title="Certificates & Scholarships" />
					<SidePost title="Credits & Attribution" />
				</div>
			</div>
		</div>
	);
}

function fillProgressBars() {
	let elements = document.getElementsByClassName("progress-bar");
	Content.skills.map(function(l, i) {
		if (l.level !== undefined) {
			return (elements[i].style.width = l.level);
		}
		return "";
	});
}
class App extends React.Component {
	componentDidMount() {
		setTimeout(function() {
			fillProgressBars();
		}, 1000);
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<TopBar />
				<main className="mdl-layout__content">
					{renderPosts()}
					<Footer />
				</main>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
