import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width, } = Dimensions.get("window");

const slides = [
    {
        id: "1",
        icon: "search",
        title: "Discover Your\nDream Job",
        description:
            "Browse thousands of opportunities tailored to your skills and preferences",
        color: "#7A33DD",
    },
    {
        id: "2",
        icon: "briefcase",
        title: "Connect with\nTop Companies",
        description:
            "Get matched with leading employers looking for talented professionals like you",
        color: "#6366F1",
    },
    {
        id: "3",
        icon: "trending-up",
        title: "Grow Your\nCareer",
        description:
            "Track applications, get insights, and take your career to the next level",
        color: "#8B5CF6",
    },
];

const OnboardingScreen = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList>(null);

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0]?.index || 0);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            // Navigate to sign up or home
            router.push("/(auth)/signUp");
        }
    };

    const skip = () => {
        router.push("/(auth)/signUp");
    };

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.slide}>
                {/* Icon Container */}
                <View style={styles.iconContainer}>
                    <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                        <Ionicons name={item.icon as any} size={120} color="#FFFFFF" />
                    </View>

                    {/* Floating Decorations */}
                    <View style={styles.floatingCircle1} />
                    <View style={styles.floatingCircle2} />
                </View>

                {/* Text Content */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    };

    const Paginator = () => {
        return (
            <View style={styles.paginatorContainer}>
                {slides.map((_, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [12, 40, 12],
                        extrapolate: "clamp",
                    });

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });

                    return (
                        <Animated.View
                            key={index.toString()}
                            style={[
                                styles.dot,
                                {
                                    width: dotWidth,
                                    opacity,
                                    backgroundColor: slides[currentIndex].color,
                                },
                            ]}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <Ionicons name="briefcase" size={24} color="#FFFFFF" />
                    </View>
                    <Text style={styles.logoText}>Gigs</Text>
                </View>
                {currentIndex < slides.length - 1 && (
                    <TouchableOpacity onPress={skip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Slides */}
            <FlatList
                data={slides}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />

            {/* Footer */}
            <View style={styles.footer}>
                <Paginator />

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    {currentIndex === slides.length - 1 ? (
                        <>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.primaryButton,
                                    { backgroundColor: slides[currentIndex].color },
                                ]}
                                onPress={() => router.push("/(auth)/signUp")}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.primaryButtonText}>Get Started</Text>
                                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.secondaryButton}
                                onPress={() => router.push("/(auth)/signIn")}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.secondaryButtonText}>Sign In</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity
                            style={[
                                styles.button,
                                styles.primaryButton,
                                { backgroundColor: slides[currentIndex].color },
                            ]}
                            onPress={scrollTo}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.primaryButtonText}>Next</Text>
                            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Background Decorations */}
            <View style={styles.backgroundDecor1} />
            <View style={styles.backgroundDecor2} />
            <View style={styles.backgroundDecor3} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },

    /* Header */
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 20,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    logo: {
        width: 40,
        height: 40,
        backgroundColor: "#7A33DD",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    logoText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#1F2937",
    },
    skipText: {
        fontSize: 16,
        color: "#6B7280",
        fontWeight: "500",
    },

    /* Slide */
    slide: {
        width: width,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    iconContainer: {
        position: "relative",
        marginBottom: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    iconCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#7A33DD",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    floatingCircle1: {
        position: "absolute",
        top: -20,
        right: -20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#FCD34D",
        opacity: 0.8,
    },
    floatingCircle2: {
        position: "absolute",
        bottom: -30,
        left: -30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#F472B6",
        opacity: 0.7,
    },

    /* Text Content */
    textContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1F2937",
        textAlign: "center",
        marginBottom: 16,
        lineHeight: 40,
    },
    description: {
        fontSize: 16,
        color: "#6B7280",
        textAlign: "center",
        lineHeight: 24,
        paddingHorizontal: 10,
    },

    /* Footer */
    footer: {
        paddingHorizontal: 32,
        paddingBottom: 50,
    },
    paginatorContainer: {
        flexDirection: "row",
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    dot: {
        height: 12,
        borderRadius: 6,
    },

    /* Buttons */
    buttonContainer: {
        gap: 12,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderRadius: 12,
        gap: 8,
    },
    primaryButton: {
        shadowColor: "#7A33DD",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    primaryButtonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#FFFFFF",
    },
    secondaryButton: {
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#E5E7EB",
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryButtonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#1F2937",
    },

    /* Background Decorations */
    backgroundDecor1: {
        position: "absolute",
        top: 100,
        left: -50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#DDD6FE",
        opacity: 0.3,
        zIndex: -1,
    },
    backgroundDecor2: {
        position: "absolute",
        top: 200,
        right: -60,
        width: 250,
        height: 250,
        borderRadius: 125,
        backgroundColor: "#C7D2FE",
        opacity: 0.3,
        zIndex: -1,
    },
    backgroundDecor3: {
        position: "absolute",
        bottom: 150,
        left: width / 2 - 120,
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: "#E0E7FF",
        opacity: 0.3,
        zIndex: -1,
    },
});

export default OnboardingScreen;
