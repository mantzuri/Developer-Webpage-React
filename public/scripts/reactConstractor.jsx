import React from "react";
import ReactDOM from "react-dom";
import Content from "./content.js";
import $ from 'jquery';
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
			{l.imageUrl ? (
				<div className="project-image">
					<img className="image-responsive" src={l.imageUrl} alt="" />
				</div>
			) : null}
			<div
				className="mdl-color-text--grey-600 mdl-card__supporting-text"
				dangerouslySetInnerHTML={{ __html: l.desc }}
			/>
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
							<i className="material-icons">exit_to_app</i>
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
						<i className="fas fa-quote-left" />
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
					<i className="fas fa-graduation-cap" /> {"  "}
					{l.title} <div className="cite-title">{l.school}</div>
				</div>
			</span>
		));
	} else if (props.title === "Certificates & Scholarships") {
		postContent = Content.certificates.map((l, i) => (
			<span key={l.title + i}>
				<div className="mdl-card__supporting-text">
					{" "}
					<i className="fas fa-certificate" /> {"  "}
					{l.title} <div className="cite-title">{l.organization}</div>
				</div>
			</span>
		));
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
	return (
		<div className="mdl-layout__header-row portfolio-logo-row">
			<span className="mdl-layout__title">
				<div className="portfolio-logo" />
				<span className="mdl-layout__title" />
			</span>
			<span className="portfolio-name">
				<h4>Idan Mantzor</h4>
				<h5>Software Developer</h5>
			</span>
			<div className="profile-content pull-right">
				<ul className="social list-inline">{socialList}</ul>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<footer className="mdl-mini-footer">
			<div className="mdl-mini-footer--left-section">
				<img
					className="image-responsive"
					src="https://forthebadge.com/images/badges/designed-in-ms-paint.svg"
					alt=""
				/>
			</div>
			<div className="mdl-mini-footer--left-section">
				<img
					className="image-responsive"
					src="https://forthebadge.com/images/badges/powered-by-electricity.svg"
					alt=""
				/>
			</div>
			<div className="mdl-mini-footer--left-section">
				<img
					className="image-responsive"
					src="https://forthebadge.com/images/badges/cc-0.svg"
					alt=""
				/>
			</div>
			<div className="mdl-mini-footer--right-section">
				<a href="" target="_blank" className="label">
					Source Code
					<img
						className="image-responsive image-thumb"
						src="assets/images/logos/octocat.png"
						alt=""
					/>
				</a>
			</div>
		</footer>
	);
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
		registerVisitor();
	}

	render() {
		return (
			<div>
				{renderPosts()}
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<TopBar />, document.getElementById("header"));

function registerVisitor() {
	$.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
  		console.log(JSON.stringify(data, null, 2));
	});
}

registerServiceWorker();
