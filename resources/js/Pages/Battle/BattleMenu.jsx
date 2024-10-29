import React, { useState, useEffect } from 'react';

const TopBanner = () => {
    return (
        <div style={styles.banner}>
            <p style={styles.text}>Battle-Simulator</p>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: "#ED0505",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "10px 0",
        textAlign: "center",
        transition: "transform 0.3s ease, width 0.3s ease",
    },
    bannerShifted: {
        width: "75%", // Scales to 3/4 width when friend list is open on large screens
        transform: "translateX(25%)",
    },
    text: {
        color: "white",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
        fontSize: "18px",
    },
    leftColumn: {
        backgroundColor: "#383838",
        width: "100px",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
        transition: "transform 0.3s ease",
    },
    rightColumn: {
        backgroundColor: "#383838",
        width: "100px",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        transition: "transform 0.3s ease",
    },
    content: {
        marginLeft: "100px",
        marginRight: "100px",
        paddingTop: "60px",
        paddingBottom: "20px",
        textAlign: "center",
        transition: "transform 0.3s ease, width 0.3s ease",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "-20px 0",
        transition: "transform 0.3s ease",
    },
    button: {
        flex: 1,
        padding: "10px 20px",
        cursor: "pointer",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
        fontSize: "16px",
        minWidth: "120px", // Minimum width for buttons
        minHeight: "40px", // Minimum height for buttons
    },
    activeButton: {
        backgroundColor: "#ddd",
        borderBottom: "2px solid #ED0505",
    },
    flexboxContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "10px",
        margin: "20px",
        transition: "transform 0.3s ease, width 0.3s ease",
    },
    flexboxItem: {
        width: "400px",
        height: "400px",
        minWidth: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "3px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "10px",
        boxSizing: "border-box",
        transition: "border-color 0.3s ease",
        cursor: "pointer",
        position: "relative",
    },
    image: {
        width: "300px",
        height: "300px",
        marginBottom: "5px",
    },
    confirmButton: {
        position: "absolute",
        top: "10px",
        padding: "5px 10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
        zIndex: 1,
    },
    transparentBox: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    iconContainer: {
        position: "fixed",
        bottom: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#383838",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 3000,
        transition: "border 0.2s ease",
    },
    iconActive: {
        border: "2px solid yellow",
    },
    iconImage: {
        width: "30px",
        height: "30px",
    },
    friendListOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#383838",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        transition: "width 0.3s ease",
    },
    friendListOverlayLarge: {
        width: "25%", // Only 1/4 of the screen width on large screens
    },
    contentShifted: {
        transform: "translateX(25%)", // Shift content 25% to the right
        width: "75%", // Scale content to fill 3/4 of the screen
    },
};

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

const BattleMenu = () => {
    const isLargeScreen = useMediaQuery("(min-width: 600px)");
    const [activeList, setActiveList] = useState("list1");
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [friendListVisible, setFriendListVisible] = useState(false);
    const [friendIconPressed, setFriendIconPressed] = useState(false);
    const [homeIconPressed, setHomeIconPressed] = useState(false);

    const list1 = [
        { text: "Random Battles", imgSrc: "icons/random.gif" },
        { text: "Unranked Random Battles", imgSrc: "icons/random-unranked.gif" },
        { text: "Everything Allowed", imgSrc: "icons/pokeballs/poke.gif" },
        { text: "Item 4", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 5", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 6", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 7", imgSrc: "https://via.placeholder.com/80" },
    ];

    const list2 = [
        { text: "Item A", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item B", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item C", imgSrc: "https://via.placeholder.com/80" },
    ];

    const handleClickOutside = (event) => {
        if (!event.target.closest('.flexbox-item')) {
            setSelectedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };

    const handleConfirmClick = () => {
        alert("Confirmed!");
        setSelectedIndex(null);
    };

    const renderList = (list) => {
        return list.map((item, index) => (
            <div
                key={index}
                className="flexbox-item"
                style={{
                    ...styles.flexboxItem,
                    ...(selectedIndex === index ? styles.transparentBox : {}),
                    borderColor: selectedIndex === index ? "yellow" : "#ccc",
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    handleItemClick(index);
                }}
            >
                {selectedIndex === index && (
                    <button
                        style={styles.confirmButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleConfirmClick();
                        }}
                    >
                        Play
                    </button>
                )}
                <img src={item.imgSrc} alt={item.text} style={styles.image} />
                <p>{item.text}</p>
            </div>
        ));
    };

    return (
        <div>
            <div style={{ ...styles.banner, ...(isLargeScreen && friendListVisible ? styles.bannerShifted : {}) }}>
                <TopBanner />
            </div>
            {isLargeScreen && !friendListVisible ? <div style={styles.leftColumn}></div> : null}
            {isLargeScreen && !friendListVisible ? <div style={styles.rightColumn}></div> : null}
            <div style={{ ...styles.content, ...(isLargeScreen && friendListVisible ? styles.contentShifted : {}) }}>
                <div style={styles.buttonContainer}>
                    <button
                        style={{
                            ...styles.button,
                            ...(activeList === "list1" ? styles.activeButton : {}),
                        }}
                        onClick={() => setActiveList("list1")}
                    >
                        Single Battles
                    </button>
                    <button
                        style={{
                            ...styles.button,
                            ...(activeList === "list2" ? styles.activeButton : {}),
                        }}
                        onClick={() => setActiveList("list2")}
                    >
                        Double Battles
                    </button>
                </div>
                <div style={styles.flexboxContainer}>
                    {activeList === "list1" ? renderList(list1) : renderList(list2)}
                </div>
            </div>
            <div
                style={{
                    ...styles.iconContainer,
                    left: "20px",
                    ...(friendIconPressed ? styles.iconActive : {}),
                }}
                onMouseDown={() => setFriendIconPressed(true)}
                onMouseUp={() => {
                    setFriendIconPressed(false);
                    setFriendListVisible((prevVisible) => !prevVisible);
                }}
            >
                <img src="icons/friends.svg" alt="Menu Icon" style={styles.iconImage} />
            </div>
            <div
                style={{
                    ...styles.iconContainer,
                    right: "20px",
                    ...(homeIconPressed ? styles.iconActive : {}),
                }}
                onMouseDown={() => setHomeIconPressed(true)}
                onMouseUp={() => {
                    setHomeIconPressed(false);
                    window.location.href = "/";
                }}
            >
                <img src="icons/home.svg" alt="Home Icon" style={styles.iconImage} />
            </div>
            {friendListVisible && (
                <div
                    style={{
                        ...styles.friendListOverlay,
                        ...(isLargeScreen ? styles.friendListOverlayLarge : {}),
                    }}
                >
                    <h2>Friend List</h2>
                    {/* Content for friend list will be added here */}
                </div>
            )}
        </div>
    );
};

export default BattleMenu;
