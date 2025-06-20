"use client";

import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ChevronRight, Filter, Grid, List, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { sampleProducts } from "@/data";

interface CategoryPageProps {
  params: {
    slug: string[];
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryPath = params.slug;
  const mainCategory = categoryPath[0]?.replace(/-/g, " ") || "";
  const subCategory = categoryPath[1]?.replace(/-/g, " ") || "";

  const [priceRange, setPriceRange] = useState([19999, 94499]);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedStorageTypes, setSelectedStorageTypes] = useState<string[]>(
    [],
  );
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const displayCategory = capitalizeWords(mainCategory);
  const displaySubCategory = subCategory ? capitalizeWords(subCategory) : "";
  const pageTitle = displaySubCategory || displayCategory;

  const materials = [
    "Sheesham Wood",
    "Engineered Wood",
    "Fabric",
    "Metal",
    "Ash Wood",
    "Mango Wood",
  ];

  const finishes = [
    "Walnut Finish",
    "Honey Finish",
    "Teak Finish",
    "Columbian Walnut Finish",
    "Black Finish",
    "White Finish",
    "Frosty White Finish",
    "Flowery Wenge Finish",
  ];

  const storageOptions = ["With Storage", "Without Storage"];
  const storageTypes = [
    "Drawer Storage",
    "Box Storage",
    "With Shelves",
    "Hydraulic Storage",
  ];

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material));
    }
  };

  const handleFinishChange = (finish: string, checked: boolean) => {
    if (checked) {
      setSelectedFinishes([...selectedFinishes, finish]);
    } else {
      setSelectedFinishes(selectedFinishes.filter((f) => f !== finish));
    }
  };

  const handleStorageChange = (storage: string, checked: boolean) => {
    if (checked) {
      setSelectedStorage([...selectedStorage, storage]);
    } else {
      setSelectedStorage(selectedStorage.filter((s) => s !== storage));
    }
  };

  const handleStorageTypeChange = (storageType: string, checked: boolean) => {
    if (checked) {
      setSelectedStorageTypes([...selectedStorageTypes, storageType]);
    } else {
      setSelectedStorageTypes(
        selectedStorageTypes.filter((st) => st !== storageType),
      );
    }
  };

  const resetFilters = () => {
    setPriceRange([19999, 94499]);
    setFastDelivery(false);
    setSelectedMaterials([]);
    setSelectedFinishes([]);
    setSelectedStorage([]);
    setSelectedStorageTypes([]);
  };

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = sampleProducts.filter((product) => {
      // Filter by category
      const categoryMatch =
        product.category.toLowerCase().includes(mainCategory.toLowerCase()) ||
        (subCategory &&
          product.category.toLowerCase().includes(subCategory.toLowerCase()));

      // Filter by price range
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      // For now, we'll just filter by category and price
      // In a real app, you'd have material, finish, storage data in products
      return categoryMatch && priceMatch;
    });

    setFilteredProducts(filtered);
  }, [
    mainCategory,
    subCategory,
    priceRange,
    selectedMaterials,
    selectedFinishes,
    selectedStorage,
    selectedStorageTypes,
    fastDelivery,
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/category/${categoryPath[0]}`}
              className="hover:text-orange-500"
            >
              {displayCategory}
            </Link>
            {displaySubCategory && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">
                  {displaySubCategory}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {pageTitle}
              </h1>
              <p className="text-gray-600">
                Discover our premium collection of {pageTitle.toLowerCase()}{" "}
                furniture
              </p>
            </div>

            {/* Filter and View Options */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 md:hidden border-amber-700 text-amber-700 hover:bg-amber-50"
                onClick={() => setShowMobileFilters(true)}
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 border-amber-700 text-amber-700 hover:bg-amber-50"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="sm" className="border-r">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filter Panel - Desktop */}
          <div className="w-80 flex-shrink-0 hidden md:block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-amber-700 hover:text-amber-800"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              {/* Fast Delivery */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fast-delivery"
                    checked={fastDelivery}
                    onCheckedChange={(checked) =>
                      setFastDelivery(checked === true)
                    }
                  />
                  <label
                    htmlFor="fast-delivery"
                    className="text-sm font-medium text-gray-700"
                  >
                    Fast Delivery
                  </label>
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox
                        id={material}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={(checked) =>
                          handleMaterialChange(material, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={material}
                        className="text-sm text-gray-700"
                      >
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Finish
                </h4>
                <div className="space-y-2">
                  {finishes.map((finish) => (
                    <div key={finish} className="flex items-center space-x-2">
                      <Checkbox
                        id={finish}
                        checked={selectedFinishes.includes(finish)}
                        onCheckedChange={(checked) =>
                          handleFinishChange(finish, checked as boolean)
                        }
                      />
                      <label htmlFor={finish} className="text-sm text-gray-700">
                        {finish}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Storage
                </h4>
                <div className="space-y-2">
                  {storageOptions.map((storage) => (
                    <div key={storage} className="flex items-center space-x-2">
                      <Checkbox
                        id={storage}
                        checked={selectedStorage.includes(storage)}
                        onCheckedChange={(checked) =>
                          handleStorageChange(storage, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={storage}
                        className="text-sm text-gray-700"
                      >
                        {storage}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage Type */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Storage Type
                </h4>
                <div className="space-y-2">
                  {storageTypes.map((storageType) => (
                    <div
                      key={storageType}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={storageType}
                        checked={selectedStorageTypes.includes(storageType)}
                        onCheckedChange={(checked) =>
                          handleStorageTypeChange(
                            storageType,
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor={storageType}
                        className="text-sm text-gray-700"
                      >
                        {storageType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Filters
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Reset
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowMobileFilters(false)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Fast Delivery */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="fast-delivery-mobile"
                        checked={fastDelivery}
                        onCheckedChange={(checked) =>
                          setFastDelivery(checked === true)
                        }
                      />
                      <label
                        htmlFor="fast-delivery-mobile"
                        className="text-sm font-medium text-gray-700"
                      >
                        Fast Delivery
                      </label>
                    </div>
                  </div>

                  {/* Material */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Material
                    </h4>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <div
                          key={material}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`${material}-mobile`}
                            checked={selectedMaterials.includes(material)}
                            onCheckedChange={(checked) =>
                              handleMaterialChange(material, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`${material}-mobile`}
                            className="text-sm text-gray-700"
                          >
                            {material}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finish */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Finish
                    </h4>
                    <div className="space-y-2">
                      {finishes.map((finish) => (
                        <div
                          key={finish}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`${finish}-mobile`}
                            checked={selectedFinishes.includes(finish)}
                            onCheckedChange={(checked) =>
                              handleFinishChange(finish, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`${finish}-mobile`}
                            className="text-sm text-gray-700"
                          >
                            {finish}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Storage */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Storage
                    </h4>
                    <div className="space-y-2">
                      {storageOptions.map((storage) => (
                        <div
                          key={storage}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`${storage}-mobile`}
                            checked={selectedStorage.includes(storage)}
                            onCheckedChange={(checked) =>
                              handleStorageChange(storage, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`${storage}-mobile`}
                            className="text-sm text-gray-700"
                          >
                            {storage}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Storage Type */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Storage Type
                    </h4>
                    <div className="space-y-2">
                      {storageTypes.map((storageType) => (
                        <div
                          key={storageType}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`${storageType}-mobile`}
                            checked={selectedStorageTypes.includes(storageType)}
                            onCheckedChange={(checked) =>
                              handleStorageTypeChange(
                                storageType,
                                checked as boolean,
                              )
                            }
                          />
                          <label
                            htmlFor={`${storageType}-mobile`}
                            className="text-sm text-gray-700"
                          >
                            {storageType}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="flex-1">
            <ProductGrid
              title={`${pageTitle} Collection`}
              subtitle={`Browse our extensive range of ${pageTitle.toLowerCase()} products`}
              products={filteredProducts}
              bgColor="bg-white"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
